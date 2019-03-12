import React from 'react';
import {connect} from 'react-redux';
import {saveToken} from 'actions';

class Register extends React.Component{
	state = {
		errMsg: [],
		password: "",
		email: "",
		firstName: "",
		lastName: "",
		Organization: "",
		title: ""
	}
	handleChange = (event) => {
		const{name, value} = event.target;
		this.setState({[name]: value});
		if(this.state.errMsg.length){
			this.setState({errMsg: []});
		}
	}
	handleSubmission = async (e) => {
		const {password, email, firstName, lastName, Organization, title, errMsg} = this.state;
		if(!email || !password || !firstName || !lastName || !Organization || !title){
		 	this.setState({errMsg: [...this.state.errMsg, 'Pls fill in all fields']})
		 }
		if(password.length <8){
			this.setState({errMsg: [...this.state.errMsg, 'Password must be at least 8 characters long']})
		}
		if(!this.validateEmail(email)){
			this.setState({errMsg: [...this.state.errMsg, 'Invalid Email Address']})
		}
		e.preventDefault();
		if(!errMsg.length){
			const res = await fetch('http://localhost:3000/register', {
		    method: 'POST',
		    headers: {'Content-Type': 'application/json'},
		    body: JSON.stringify(this.state)
			})
			if(res.status === 422){
			return this.setState({errMsg: [...this.state.errMsg, 'Email already exists']})
		 	}
			const data = await res.json();
		 	this.props.saveToken(data);
		}
	}
	renderError = () => {
		const {errMsg} = this.state;
		if(errMsg.length){
			return (
				errMsg.map((msg, index)=>{
					return (
						<div key={index} className="alert alert-warning mt-2" role="alert">
							{msg}
						</div>
					);
				})
			);
		}else{
			return null;
		}
	}
	validateEmail = email => {
		 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	 return re.test(String(email).toLowerCase());
	}
	render(){
		return (
		<div className="container">
			<form onSubmit={this.handleSubmission}>
				<div className="row justify-content-center my-2">
					<div className="col-sm-6">
						<label>First Name</label>
						<input type="text" placeholder="First name" className="form-control" name="firstName" onChange={this.handleChange}/>
					</div>
					<div className="col-sm-6">
						<label>Last Name</label>
						<input type="text" placeholder="Last name" className="form-control" name="lastName" onChange={this.handleChange}/>
					</div>
				</div>
				<div className="row justify-content-center my-2">
					<div className="col-sm-6">
						<label>Email</label>
						<input type="email" placeholder="Email" className="form-control" name="email" onChange={this.handleChange}/>
					</div>
					<div className="col-sm-6">
						<label>Password</label>
						<input type="password" placeholder="Password" className="form-control" name="password" onChange={this.handleChange}/>
					</div>
				</div>
				<div className="row justify-content-center my-2">
					<div className="col-sm-6">
						<label>title</label>
						<input type="text" placeholder="title" className="form-control" name="title" onChange={this.handleChange}/>
						<small className="form-text text-muted">e.g. Student, Scientist, Superhero</small>
					</div>
					<div className="col-sm-6">
						<label>Organization</label>
						<input type="text" placeholder="Organization" className="form-control" name="Organization" onChange={this.handleChange}/>
						<small className="form-text text-muted">e.g. All Boys High School, Example Inc.</small>
					</div>
				</div>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
			{this.renderError()}
		</div>
	);
	}
	
}
export default connect(null, {saveToken})(Register);
/*
let errFound = [];
		const {password, email, firstName, lastName, Organization, title} = this.state;
		if(!email || !password || !firstName || !lastName || !Organization || title){
		 	errFound.push('Pls fill in all details');
		 }
		if(this.validateEmail(email)){
			errFound.push('Invalid Email Address');
		}
		if(password.length <8){
			errFound.push('Password must be at least 8 characters long')
		}
		if(errFound.length){
			this.setState({errMsg: [...this.state.errMsg, ...errFound]})
		}
		e.preventDefault();
		console.log('Here is the state', this.state);
*/