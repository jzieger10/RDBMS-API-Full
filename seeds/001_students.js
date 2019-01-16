exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("students")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("students").insert([
				{ name: "Josh" },
				{ name: "Dennis" },
        { name: "Yasirah" },
        { name: "Tommy" },
        { name: "Addison" },
        { name: "Lidiia" },
        { name: "Andrew" },
        { name: "Chase" },
        { name: "Kamal" },
			]);
		});
};
