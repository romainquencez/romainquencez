const critical = require('critical')
const path = require('path')

critical.generate({
  base: path.join(path.resolve(__dirname), '../dist/'),
  src: 'index.html',
  dest: 'index.html',
  inline: true,
  extract: true,
  width: 667,
  height: 375,
  penthouse: {
    blockJSRequests: false,
  }
})
