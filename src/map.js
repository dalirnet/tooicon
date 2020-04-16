const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const svgConvertStream = require('svgicons2svgfont')
const list = require('./list.json')
const fontName = 'tooIcon'
const unicodeStart = 57500

let icons = {}
let index = 0
_.forEach(list, (collection) => {
    _.forEach(collection, (status, icon) => {
        if (_.has(icons, icon)) {
            console.log(`Duplicate item [${icon}]`)
        } else if (status === true) {
            icons[icon] = unicodeStart + index
            index++
        }
    })
})

const fontStream = new svgConvertStream({
    fontName,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fixedWidth: true,
    fontHeight: 2400,
    centerHorizontally: true,
    normalize: true,
    round: 1,
    metadata: fontName,
})

fontStream
    .pipe(
        fs.createWriteStream(
            path.join(__dirname, `../dist/font/${fontName}.svg`)
        )
    )
    .on('finish', function () {})
    .on('error', function (err) {
        console.log(err)
    })

_.forEach(icons, (code, name) => {
    const glyph = fs.createReadStream(
        path.join(__dirname, `../svg/fill/${name}.svg`)
    )
    glyph.metadata = {
        unicode: [String.fromCharCode(code)],
        name,
    }
    fontStream.write(glyph)
})

fontStream.end()
