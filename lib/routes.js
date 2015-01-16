var schemas = require('./schemas')

var routes = module.exports.routes = []

routes.push({
  method: 'GET',
  path: '/',
  handler: index
})

routes.push({
  method: 'POST',
  path: '/api/v1/result',
  handler: result,
  config: {
    validate: {
      payload: schemas.result
    }
  }
})

function index(request, reply) {
  reply('Hello, world!')
}

function result(request, reply) {
  reply('Hello, ' + request.payload.runId + '!')
}