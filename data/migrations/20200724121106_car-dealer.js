
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('VIN', 128).unique().notNullable();
        tbl.text('make');
        tbl.text('model');
        tbl.text('mileage');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars');
};
