exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('offer').del()
    .then(function () {
      // Inserts seed entries
      return knex('offer').insert([
        {id: 1, name: '25% off your purchase on the first of never.'}
      ])
      .then(() => {
        return knex.raw('SELECT setval("offer_id_seq", (SELECT MAX(id) FROM offer));')
      })
    })
}
