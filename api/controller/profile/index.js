const {Router} = require('express')

const {Profile, Parameter} = require('../../models')
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
    profile.parameters = Parameter.where("profileId", req.params.profileId, true);
    res.status(200).json(profile)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  try {
    const profile = Profile.create({...req.body, "lastConnection": Date.now()})
    Parameter.create({
      type: "PARKINSON_MOVEMENT_DETECTOR", value: 0, isEnabled: true, profileId: parseInt(profile.id, 10)
    })
    Parameter.create({type: "PARKINSON_BOX_SPACING", value: 16, isEnabled: true, profileId: parseInt(profile.id, 10)})
    Parameter.create({type: "PARKINSON_BOX_SIZING", value: 16, isEnabled: true, profileId: parseInt(profile.id, 10)})
    Parameter.create({type: "VISION_SCALE", value: 16, isEnabled: true, profileId: parseInt(profile.id, 10)})
    res.status(201).json(profile)
  } catch (err) {
    console.log(err)
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.delete('/:profileId', (req, res) => {
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
