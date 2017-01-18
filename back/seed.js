// const Sequelize = require('sequelize');
// const sequelizeConnection = require('./models');
const models = require('./models');


const seedFunction = () => {

//School.sync will create the School table
models.School.bulkCreate([
		{name: 'C4Q', district: 'LIC', size: 30},
		{name: 'Laguardia', district: 'LIC', size: 3000},
		{name: 'FlatIron', district: 'FlatIron', size: 100},
		{name: 'NYU', district: 'Manhatten', size: 30}
	])
	.catch((err) => console.log(err));

//Student.sync will create the Student table
models.Student.bulkCreate([
        {name: 'iliass', age: '33' , grade: 'A+', SchoolId: '1'},
        {name: 'jung', age: '30' , grade: 'A+', SchoolId: '1'},
        {name: 'jon', age: '30' , grade: 'A+', SchoolId: '3'},
        {name: 'daniel', age: '30' , grade: 'A+', SchoolId: '2'},
        {name: 'luis', age: '28' , grade: 'A+', SchoolId: '4'},
    ])
    .catch((err) => console.log(err));
}

module.exports = seedFunction