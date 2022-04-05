const {Router} = require('express')

const {Profile, Quiz} = require('../../models')
const router = new Router()
const parametersRouter = require("./parameter")

router.use('/:profileId/parameters', parametersRouter)

router.get('/', (req, res) => {
  try {
    const profiles = Profile.get()
    res.status(200).json(profiles)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:profileId', (req, res) => {
  try {
    const profile = Profile.getById(req.params.profileId)
    res.status(200).json(profile)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  try {
    const quiz = Profile.create({...req.body, "lastConnection": Date.now()})

    res.status(201).json(quiz)
  } catch (err) {
    console.log(err)
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.delete('/:profileId' , (req,res) => {
  try {
    Profile.delete(req.params.profileId)
    res.status(200).json({msg: 'ok'})
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:profileId', (req, res) => {
  try {
    res.status(200).json(Profile.update(req.params.profileId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
