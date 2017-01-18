const router = require('express').Router();

//REQUIRE MODELS
const School = require('../models').School;
const Student = require('../models').Student;

//FUNCTIONS
const getAllSchools = (req,res) => (
	School.findAll()
		.then((schoolData)=>res.send(schoolData))
)

const createSchool = (req,res) => (
	School.create({
		name: req.body.name,
		district: req.body.district,
		size: req.body.size
	})
		.then((schoolData)=>{
			schoolData.dataValues.message = 'School successfully added!'
			res.send(schoolData)
		})
)

const getOneSchool = (req,res) => (
	School.findOne({
		where: {
			id: req.params.schoolID
		},
		include: [
			{model: Student}
		]
	})
		.then((schoolData)=>res.send(schoolData))
)

//ROUTES
router.route('/')
	.get(getAllSchools)
	.post(createSchool)

router.route('/:schoolID')
	.get(getOneSchool)

//EXPORT
module.exports = router;