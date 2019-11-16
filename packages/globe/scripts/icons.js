var fs = require('fs')
var path = require('path')
var transformFile = require('read-transform-write').default
var DOMParser = require('xmldom').DOMParser
var XMLSerializer = require('xmldom').XMLSerializer

var parser = new DOMParser()
var serializer = new XMLSerializer()

function fixIcons() {
  fs.readdir(path.join(__dirname, '../src/icons/svg/'), (err, files) => {
    files.forEach(file => {
      if (file === '.DS_Store') {
        return
      }

      const transform = data => write => {
        const svg = parser.parseFromString(data).documentElement

        const height = svg.getAttribute('height')
        const width = svg.getAttribute('width')

        const viewBox = '0 0 ' + parseInt(width) + ' ' + parseInt(height)

        svg.setAttribute('viewBox', viewBox)

        write(
          path.join(__dirname, '../src/icons/svg/', file),
          serializer.serializeToString(svg)
        )
      }

      transformFile(
        path.join(__dirname, '../src/icons/svg/', file),
        transform,
        ({ isDone }) => {
          if (isDone) {
            console.log('Successfully normalized ' + file + '.')
          }
        }
      )
    })
  })
}

const generateExternal = ({
  fileName,
  moduleName,
}) => `[@bs.module "./js/${fileName}.js"] [@react.component]
external ${moduleName}:
  (
    ~fill: string=?,
    ~stroke: string=?,
    ~style: ReactDOMRe.style=?,
    ~className: string=?,
    unit
  ) =>
  React.element =
  "default";`

const replacer = {
  switch: 'switch_',
}

function generateIcons() {
  fs.readdir(path.join(__dirname, '../src/icons/js/'), (err, files) => {
    const icons = files
      .map(file => file.split('.')[0])
      .map(fileName => {
        const moduleName = fileName.charAt(0).toLowerCase() + fileName.substr(1)

        return generateExternal({
          fileName,
          moduleName: replacer[moduleName] || moduleName,
        })
      })

    fs.writeFile(
      path.join(__dirname, '../src/icons/Icons.re'),
      icons.join('\n\n'),
      err => {
        if (err) throw err
        console.log('Successfully generated Icons.re.')
      }
    )
  })
}

fixIcons()
generateIcons()
