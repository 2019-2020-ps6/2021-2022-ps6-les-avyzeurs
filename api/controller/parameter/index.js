const {Router} = require('express')

const {Parameter} = require('../../models')
const router = new Router()

router.get('/', (req, res) => {
  try {
    const parameters = Parameter.get()
    res.status(200).json(parameters)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:parameterId', (req, res) => {
  try {
    const param = Parameter.getById(req.params.parameterId)
    res.status(200).json(param)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:paramId', (req, res) => {
  try {
    res.status(200).json(Parameter.update(req.params.paramId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
