const mds = require('markdown-styles')
const path = require('path')
const fs = require('fs')

mds.render(mds.resolveArgs({
  input: path.resolve(__dirname, '..', 'src'),
  output: path.resolve(__dirname, '..', 'dist'),
  layout: 'github'
}), function () {
  fs.writeFile(
    path.resolve(__dirname, '..', 'dist/build-time.txt'),
    (new Date()).toLocaleString(),
    (err) => {
      if (err) {
        throw err
      }
      console.log('\nDone.')
    })
})
