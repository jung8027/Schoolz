var React = require('react')
	, ReactDOM = require('react-dom')
	, $ = require('jquery')

const SchoolInfo = React.createClass({
	getInitialState(){
		return {
			schoolInfo: null, name: '', age: '', grade: ''
		}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/schools/'+ this.props.params.schoolId,
			type: 'GET',
		})
		.done(schoolsInfo => this.setState({schoolInfo: schoolsInfo}))
	},
	inputChange(eventType, event){
		event.preventDefault();
		this.setState({[eventType]: event.target.value})
	},
	submitInfo(){
		event.preventDefault();
		$.ajax({
			url: '/api/student/',
			type: 'POST',
			data: {
				name: this.state.name,
				age: this.state.age,
				grade: this.state.grade,
				SchoolId: this.props.params.schoolId
			}
		})
		.done(response => console.log(response))
	},
	render(){
		console.log('from info',this.state)
		return(
			<div>
				<p>SCHOOL INFO:</p>
				{this.state.schoolInfo ? 
					<div>
						<p>name: {this.state.schoolInfo.name}</p>
						<p>district: {this.state.schoolInfo.district}</p>
						<p>max size: {this.state.schoolInfo.size}</p>
					</div> :
					<p>no information found</p>
				}
				<ol>
					<p>Enrolled students:</p>
					{this.state.schoolInfo ? 
						this.state.schoolInfo.Students.map((student, index)=>
							<li key={index}>
								<br/>
								Name: {student.name}
								<br/>
								Age: {student.age} 
								<br/>
								Grade: {student.grade}
							</li>
						) :
						 <p>no students found</p>
					}
				</ol>
				<form onSubmit={this.submitInfo}>
					<p>Enroll new student:</p>
					<input type='text' placeholder='name' onChange={this.inputChange.bind(this, 'name')} value={this.state.name}/>
					<br/>
					<input type='text' placeholder='age' onChange={this.inputChange.bind(this, 'age')} value={this.state.age}/>
					<br/>
					<input type='text' placeholder='grade' onChange={this.inputChange.bind(this, 'grade')} value={this.state.grade}/>
					<br/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
		)
	}
})

export default SchoolInfo