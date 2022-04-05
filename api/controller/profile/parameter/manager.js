const { Parameter } = require('../../../models/index')

function filterParameter(id) {
  return Parameter.get().filter((p) => parseInt(p.profileId, 10) === parseInt(id, 10))
}

module.exports = { filterParameter }
