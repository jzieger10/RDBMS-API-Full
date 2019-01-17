const express = require("express");
const knex = require("knex");
const router = express.Router();
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

router
	.route("/")
	.get((req, res) => {
		db("cohorts")
			.then(cohorts => {
				res.status(201).json(cohorts);
			})
			.catch(err =>
				res.status(500).json({
					error: "There has been a server error on the GET route",
					err,
				})
			);
	})
	.post((req, res) => {
		if (req.body.name) {
			db("cohorts")
				.insert(req.body)
				.then(cohorts => {
					res.status(201).json(cohorts);
				})
				.catch(err =>
					res.status(500).json({
						error:
							"There has been a server error on the POST route",
						err,
					})
				);
		} else {
			res.status(400).json({ error: "You must include a name" });
		}
	});

router
	.route("/:id")
	.get((req, res) => {
		db("cohorts")
			.where({ id: req.params.id })
			.then(cohort => {
				res.status(201).json(cohort);
			})
			.catch(err =>
				res.status(500).json({
					error: "There has been a server error on the GET route",
					err,
				})
			);
	})
	.put((req, res) => {
		if (req.body.name) {
			db("cohorts")
				.where({ id: req.params.id })
				.update(req.body)
				.then(count => {
					if (count > 0) {
						res.status(201).json({
							message: `${count} record has been updated.`,
						});
					} else {
						res.status(404).json({
							error: `The requested ID does not exist`,
						});
					}
				})
				.catch(err =>
					res.status(500).json({
						error:
							"There has been a server error on the PUT route",
						err,
					})
				);
		} else {
			res.status(400).json({ error: "You must include a name" });
		}
    })
    .delete((req, res) => {
			db("cohorts")
				.where({ id: req.params.id })
				.del()
				.then(count => {
					if (count > 0) {
						res.status(201).json({
							message: `${count} record has been deleted.`,
						});
					} else {
						res.status(404).json({
							error: `The requested ID does not exist`,
						});
					}
				})
				.catch(err =>
					res.status(500).json({
						error:
							"There has been a server error on the DELETE route",
						err,
					})
				)
        }
    );
    
    router
	.route("/:id/students")
	.get((req, res) => {
        db('students')
			.where({ cohort_id: req.params.id })
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
