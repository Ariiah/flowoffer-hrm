
exports.up = function (knex, Promise) {
  return knex.schema.createTable('offer', (table) => {
    table.increments()
    table.varchar('name', 255)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('offer')
}

/*
exports.up = (knex, Promise) => (
  knex.schema.createTable('users', (table) => {
    table.increments()
    table.varchar('name', 256)
    table.varchar('password', 256)
    table.boolean('is_admin')
  })
)

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('users')
*/
