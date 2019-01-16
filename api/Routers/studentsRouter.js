const express = require("express");
const knex = require("knex");
const router = express.Router();
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

router
	.route("/")
	.get((req, res) => {
		db("students")
			.then(students => {
				res.status(201).json(students);
			})
			.catch(err =>
				res.status(500).json({
					error: "There has been a server error on the GET route",
					err,
				})
			);
	})
module.exports = router;
