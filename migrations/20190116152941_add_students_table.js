exports.up = function(knex, Promise) {
	return knex.schema.createTable("students", tbl => {
		tbl.increments();

		tbl.string("name", 128);

		tbl.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("students");
};
