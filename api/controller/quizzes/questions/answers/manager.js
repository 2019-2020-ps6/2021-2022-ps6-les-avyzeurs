const { Answer } = require('../../../../models')

function filterAnswer(id) {
  return Answer.get().filter((a) => parseInt(a.questionId, 10) === parseInt(id, 10))
}

module.exports = { filterAnswer }
