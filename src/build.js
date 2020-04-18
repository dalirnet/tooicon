const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const pathTransform = require('svgpath')
const xmlbuilder = require('xmlbuilder')
const minify = require('@node-minify/core')
const cleanCSS = require('@node-minify/clean-css')
const ttfBuilder = require('svg2ttf')
const woff2Builder = require('ttf2woff2')
const woffBuilder = require('ttf2woff')
const eotBuilder = require('ttf2eot')
const { parse } = require('svgson')
const setting = {
    author: 'AmirRezaDalir',
    url: 'https://github.com/dalirnet/tooicon',
    version: process.env.npm_package_version,
    icon: {
        size: 24,
    },
    font: {
        name: 'tooIcon',
        size: 480,
    },
    unicode: 57500,
}
const svg = fs.readFileSync(path.join(__dirname, 'icons.svg'), 'utf8')
let xmlFont = xmlbuilder
    .begin({
        stringify: {
            attValue: (str) => str,
        },
    })
    .dec({ standalone: false })
    .dtd(
        '-//W3C//DTD SVG 1.1//EN',
        'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'
    )
    .up()
    .ele('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        version: setting.version,
    })
    .ele('metadata', setting.font.name)
    .up()
    .ele('defs')
    .ele('font', { id: setting.font.name, 'horiz-adv-x': setting.font.size })
    .ele('font-face', {
        'font-family': setting.font.name,
        'font-weight': 'normal',
        'font-style': 'normal',
        'units-per-em': setting.font.size,
        ascent: setting.font.size,
        descent: '0',
    })
    .up()
    .ele('missing-glyph')
    .up()
let css = `
@font-face {
    font-family: '${setting.font.name}';
    src: url('font/${setting.font.name}.eot');
    src: url('font/${setting.font.name}.eot?#iefix') format('embedded-opentype'),
         url('font/${setting.font.name}.woff2') format('woff2'),
         url('font/${setting.font.name}.woff') format('woff'),
         url('font/${setting.font.name}.ttf') format('truetype'),
         url('font/${setting.font.name}.svg#${setting.font.name}') format('svg');
    font-weight: normal;
    font-style: normal;
}
[class*='too-']:before{
    display: inline-block;
    font-family: '${setting.font.name}';
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
`
let cssRule = []
parse(svg).then((json) => {
    let index = 0
    _.forEach(
        _.filter(
            json.children,
            ({ attributes: { id = '_' } }) => id.charAt(0) != '_'
        ),
        ({ attributes: { id: category }, children }) => {
            _.forEach(children, ({ children: icons, attributes: { id } }) => {
                const type = id.replace(/_[\d_]+$/g, '')
                _.forEach(icons, ({ attributes: { id, d } }) => {
                    const name = id.replace(/_[\d_]+$/g, '')
                    const unicode = setting.unicode + index
                    cssRule.push(
                        `.too-${
                            name + (type == 'fill' ? '.too-fill' : '')
                        }:before {content: "\\${unicode.toString(16)}";}`
                    )
                    let xmlIcon = xmlbuilder
                        .begin()
                        .ele('svg', {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: `0 0 ${setting.font.size} ${setting.font.size}`,
                            height: setting.font.size,
                            width: setting.font.size,
                        })
                        .ele('path', {
                            d: pathTransform(d)
                                .scale(setting.font.size / setting.icon.size)
                                .abs()
                                .round(0)
                                .toString(),
                        })
                    fs.writeFileSync(
                        path.join(__dirname, `../dist/svg/${type}/${name}.svg`),
                        xmlIcon.end({ pretty: true })
                    )
                    xmlFont.ele('glyph', {
                        'glyph-name': [name, type].join('-'),
                        unicode: `&#x${unicode.toString(16)};`,
                        d: pathTransform(d)
                            .scale(
                                setting.font.size / setting.icon.size,
                                (setting.font.size / setting.icon.size) * -1
                            )
                            .translate(0, setting.font.size)
                            .abs()
                            .round(0)
                            .toString(),
                    })
                    index++
                })
            })
        }
    )
    let svgFont = xmlFont.end({ pretty: true })
    fs.writeFileSync(
        path.join(__dirname, `../dist/font/${setting.font.name}.svg`),
        svgFont
    )
    let ttfFont = ttfBuilder(svgFont, {
        url: setting.url,
        description: setting.font.name,
    })
    fs.writeFileSync(
        path.join(__dirname, `../dist/font/${setting.font.name}.ttf`),
        new Buffer.from(ttfFont.buffer)
    )
    fs.writeFileSync(
        path.join(__dirname, `../dist/font/${setting.font.name}.eot`),
        eotBuilder(ttfFont.buffer)
    )
    fs.writeFileSync(
        path.join(__dirname, `../dist/font/${setting.font.name}.woff`),
        woffBuilder(ttfFont.buffer)
    )
    fs.writeFileSync(
        path.join(__dirname, `../dist/font/${setting.font.name}.woff2`),
        woff2Builder(ttfFont.buffer)
    )
    const cssFile = (css + cssRule.join('\n')).trim()
    fs.writeFileSync(
        path.join(__dirname, `../dist/${setting.font.name}.css`),
        cssFile
    )
    minify({
        compressor: cleanCSS,
        content: cssFile,
    }).then(function (min) {
        fs.writeFileSync(
            path.join(__dirname, `../dist/${setting.font.name}.min.css`),
            min
        )
    })
})
