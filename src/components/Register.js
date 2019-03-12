import React from 'react';
import {Button, Form, Segment } from 'semantic-ui-react';
import {saveToken } from 'actions';
import { connect } from 'react-redux';
class Register extends React.Component{
	state = {
		errMsg: "",
		password: "",
		email: "",
		firstName: "",
		lastName: "",
		Organization: ""
	}
	handleChange = (e, {name, value})=>{
		this.setState({[name]: value});
	}
	handleRadio = (e, {value}) => {
		this.setState({Organization: value});
	}
	handleSubmit = async () => {
		const {password, email, firstName, lastName, Organization} = this.state;
		if(!email || !password || !firstName || !lastName || !Organization){
		 	return this.setState({errMsg: 'Pls fill in all fields'})
		 }
		const res = await fetch('https://skillshareapi.herokuapp.com/register', {
		    method: 'POST',
		    headers: {'Content-Type': 'application/json'},
		    body: JSON.stringify(this.state)
		})
		if(res.status === 422){
			return this.setState({errMsg: 'Email already exists'})
		 }
		const data = await res.json();
		 this.props.saveToken(data);
	}
	renderError = () =>{
		if(!this.state.errMsg){
			return null;
		}else {
			console.log(this.state)
			return (
				<div className="ui fluid red message">
				  <p>{this.state.errMsg}</p>
				</div>
			);
		}
	}
	render(){
		const {Organization} = this.state;
		return (
		<Segment inverted>
	    <Form inverted onSubmit={this.handleSubmit}>
	      <Form.Group widths='equal'>
	        <Form.Input fluid label='First name' placeholder='First name' name="firstName" onChange={this.handleChange}/>
	        <Form.Input fluid label='Last name' placeholder='Last name' name="lastName" onChange={this.handleChange}/>
	      </Form.Group>
	      <Form.Group>
	      	<Form.Input fluid label='Email' placeholder='Email' name="email" width={8} type="email" onChange={this.handleChange}/>
	      </Form.Group>
	      <Form.Group>
	      	<Form.Input fluid label='Password' placeholder='password' name="password" width={8} type="password" onChange={this.handleChange}/>
	      </Form.Group>
	      <Form.Group inline>
          <label>Organization</label>
	          <Form.Radio
	            label='Work'
	            value='Work'
	            checked={Organization === 'Work'}
	            onChange={this.handleRadio}
	          />
	          <Form.Radio
	            label='Community'
	            value='Community'
	            checked={Organization === 'Community'}
	            onChange={this.handleRadio}
	          />
	          <Form.Radio
	            label='High School'
	            value='HighSchool'
	            checked={Organization === 'HighSchool'}
	            onChange={this.handleRadio}
	          />
	          <Form.Radio
	            label='College'
	            value='College'
	            checked={Organization === 'College'}
	            onChange={this.handleRadio}
	          />
          </Form.Group>
	      <Button type='submit'>Submit</Button>
	    </Form>
	    {this.renderError()}
	  </Segment>
	);
	}
};
export default connect(null, {saveToken})(Register);