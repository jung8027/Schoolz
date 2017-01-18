const router = require('express').Router();

//REQUIRE MODELS
const School = require('../models').School;
const Student = require('../models').Student;

//FUNCTIONS
const createStudent = (req,res) => (
	Student.create({
		name: req.body.name,
		age: req.body.age,
		grade: req.body.grade,
		SchoolId: req.body.SchoolId
	})
		.then((studentData)=>{
			studentData.dataValues.student = {
				name: studentData.name,
				age: studentData.age,
				grade: studentData.grade
			};
			studentData.dataValues.message = 'Student successfully added!';
			res.send(studentData)
		})
)


//ROUTES
router.route('/')
	.post(createStudent)

//EXPORT
module.exports = router;