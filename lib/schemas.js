var joi = require('joi');

module.exports = {
  result: {
    runId: joi.string().guid().required(),
    pass: joi.boolean().required(),
    meta: joi.object().allow(null)
  }
}
