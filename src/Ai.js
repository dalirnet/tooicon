const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const pathTransform = require('svgpath')
const xmlbuilder = require('xmlbuilder')
const { parse } = require('svgson')

const unicodeStart = 57500
const svg = fs.readFileSync(path.join(__dirname, 'icons.svg'), 'utf8')
let xml = xmlbuilder
    .begin({
        stringify: {
            attValue: function (str) {
                return str
            },
        },
    })
    .dec({ standalone: false })
    .dtd(
        '-//W3C//DTD SVG 1.1//EN',
        'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'
    )
    .up()
    .ele('svg', { xmlns: 'http://www.w3.org/2000/svg' })
    .ele('metadata', 'tooIcon')
    .up()
    .ele('defs')
    .ele('font', { id: 'tooIcon', 'horiz-adv-x': 480 })
    .ele('font-face', {
        'units-per-em': '480',
        ascent: '480',
        descent: '0',
        'font-family': 'tooIcon',
        'font-weight': 'normal',
        'font-style': 'normal',
    })
    .up()
    .ele('missing-glyph', { 'horiz-adv-x': 0 })
    .up()

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
                _.forEach(icons, ({ attributes: { id, d: path } }) => {
                    const name = id.replace(/_[\d_]+$/g, '')
                    xml.ele('glyph', {
                        'glyph-name': [name, type].join('-'),
                        'horiz-adv-x': 480,
                        unicode: `&#x${(unicodeStart + index).toString(16)};`,
                        d: pathTransform(path)
                            .scale(20, -20)
                            .translate(0, 480)
                            .abs()
                            .round(0)
                            .toString(),
                    })
                    index++
                })
            })
        }
    )
    fs.writeFileSync(
        path.join(__dirname, '../dist/font/tooIcon.svg'),
        xml.end({ pretty: true })
    )
})
