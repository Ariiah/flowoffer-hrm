const express = require('express')
const router = express.Router()
const knex = require('../knex')

router.get('/', function (req, res, next) {
  // res.send('Enter for a chance to win ALL THE OFFERS!!!')
  knex('offer')
    .select('id', 'name')
    .then(rows => res.json(rows))
})

// get single OFFERS
router.get('/:id', function (q, s, n) {
  const {id} = q.params
  knex('offer')
    .select('id', 'name')
    .where('id', id)
    .then(rows => res.json(rows))
})

// POST new offer
router.post('/', function (q, s, n) {
  // s.send('POST an offer')
  const { name } = q.body
  knex('offer')
    .insert([
      { name: name }
    ])
    .returning('*')
    .then(result => s.json(result))
})

// DELETE offer
router.delete('/:id', function (q, s, n) {
  // s.send('TORCH THE OFFER')
  const { id } = q.params

  knex('offer')
    .del()
    .where('id', id)
    .then(result => s.json(result))
})

// UPDATE the offer
router.patch('/:id', function (q, s, n) {
  // s.send('UPDATE the offer')
  const { id } = q.params
  const { name } = q.body

  knex('offer')
    .update({ name: 'name' })
    .returning('id')
    .then(result => s.json(result))
})

module.exports = router
