const {Router} = require('express')

const {Parameter} = require('../../../models')
const router = new Router({mergeParams:true})

const {filterParameter} = require("./manager");

router.get('/', (req, res) => {
  try {
    const parameters = filterParameter(req.params.profileId)
    res.status(200).json(parameters)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:parameterId', (req, res) => {
  try {
    if (Parameter.getById(req.params.parameterId).profileId === parseInt(req.params.profileId, 10)) {
      const param = Parameter.getById(req.params.parameterId)
      res.status(200).json(param)
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  try {
    const parameter = Parameter.create({...req.body, profileId: parseInt(req.params.profileId, 10)})
    res.status(201).json(parameter)
  } catch (err) {
    console.log(err)
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.delete('/:paramId', (req, res) => {
  try {
    if (Parameter.getById(req.params.paramId).profileId === parseInt(req.params.profileId, 10)) {
      Parameter.delete(req.params.paramId)
      res.status(200).json({ msg: 'ok' })
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:paramId', (req, res) => {
  try {
    if (Parameter.getById(req.params.paramId).profileId === parseInt(req.params.profileId, 10)) {
      res.status(200).json(Parameter.update(req.params.paramId, req.body))
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
