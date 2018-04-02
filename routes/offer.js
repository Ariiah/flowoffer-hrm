const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Enter for a chance to win ALL THE OFFERS!!!')
})

// get single OFFERS
router.get('/:id', function (q, s, n) {
  s.send('GET ONE of our amazing offers!!!')
})

// POST new offer
router.post('/', function (q, s, n) {
  s.send('POST an offer')
})

// DELETE offer
router.delete('/:id', function (q, s, n) {
  s.send('TORCH THE OFFER')
})

// UPDATE the offer
router.patch('/:id', function (q, s, n) {
  s.send('UPDATE the offer')
})

module.exports = router
