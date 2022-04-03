const {Router} = require('express')

const {Profile} = require('../../models')
const router = new Router()

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

module.exports = router
