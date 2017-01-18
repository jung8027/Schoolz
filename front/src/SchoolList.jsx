var React = require('react')
	, ReactDOM = require('react-dom')
	, $ = require('jquery')
	, Link = require('react-router')

const SchoolList = React.createClass({
	getInitialState(){
		return {
			allSchools: null, name: '', district: '', size: ''
		}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/schools',
			type: 'GET',
		})
		.done(schoolsData => this.setState({allSchools: schoolsData}))
	},
	inputChange(eventType, event){
		event.preventDefault();
		this.setState({[eventType]: event.target.value})
	},
	submitInfo(){
		event.preventDefault();
		$.ajax({
			url: '/api/schools',
			type: 'POST',
			data: {
				name: this.state.name,
				size: this.state.size,
				district: this.state.district
			}
		})
		.done(response => console.log(response))
	},
	redirect(id){
		this.props.router.push('/school/'+id)
	},
	render(){
		console.log(this.state)
		return(
			<div>
				<ol>
					<p>Schools:</p>
					{this.state.allSchools ? 
						this.state.allSchools.map((school, index)=>
						<li key={index} onClick={this.redirect.bind(this, school.id)}>{school.name}</li>) :
						 <p>no schools found</p>
					}
				</ol>
				<form onSubmit={this.submitInfo}>
					<p>Make new school:</p>
					<input type='text' placeholder='name' onChange={this.inputChange.bind(this, 'name')} value={this.state.name}/>
					<br/>
					<input type='text' placeholder='district' onChange={this.inputChange.bind(this, 'district')} value={this.state.district}/>
					<br/>
					<input type='text' placeholder='size' onChange={this.inputChange.bind(this, 'size')} value={this.state.size}/>
					<br/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
		)
	}
})

export default SchoolList