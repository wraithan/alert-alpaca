var hapi = require('hapi')
var good = require('good')

var server = new hapi.Server()
server.connection({port: 3000})

server.route(require('./lib/routes').routes)

server.register({
  register: good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args:[{ log: '*', response: '*' }]
    }]
  }
}, function (err) {

  if (err) {
    throw err
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri)
  })
})
