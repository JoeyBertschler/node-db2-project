exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments('id') //no need to write id because id is the default
    table.string('vin', 17).unique().notNullable();
    // .text is for long text, .string is for short text, think s for short
    table.string('make', 128).notNullable();
    table.string('model', 256).notNullable();
    table.integer('mileage').unsigned().notNullable(); //unsigned is for positive numbers only
    table.string('title', 128).defaultTo('clean');
    table.string('transmission', 128).defaultTo('automatic');
  });
}; 

exports.down = function (knex) {
  return knex.schema.dropTable('cars');
}//always create a down function to rollback changes in other words to undo the changes