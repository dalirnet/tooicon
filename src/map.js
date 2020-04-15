const _ = require('lodash')
const list = require('../list.json')

let icons = {}
_.forEach(list, (collection) => {
    _.forEach(collection, (svg, icon) => {
        if (_.has(icons, icon)) {
            console.log(`Duplicate item [${icon}]`)
        }
        icons[icon] = ''
    })
})
console.log(_.size(icons))
