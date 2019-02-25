import React from 'react';
import {Button, Form, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { saveToken } from '../actions';
class Signin extends React.Component {
	state={errMsg: ""}
	handleChange = (e, {name, value}) => {
		this.setState({[name]: value});
	}
	handleSubmit = async ()  => {
		const res = await fetch('https://skillshareapi.herokuapp.com/signin', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
		    body: JSON.stringify(this.state)
		})
		if(res.status === 401){
			return this.setState({errMsg: "Incorrect email and password"});
		}
		const data = await res.json();
		this.props.saveToken(data);
	}
	renderError = () => {
		if(!this.state.errMsg){
			return null;
		}else{
			return (
				<div className="ui fluid red message">
				  <p>{this.state.errMsg}</p>
				</div>
			);
		}
	}
	render(){
		return(
		<Segment inverted>
	    <Form inverted onSubmit={this.handleSubmit}>
	      <Form.Group>
	      	<Form.Input fluid label='Email' placeholder='Email' name='email' width={8} onChange={this.handleChange}/>
	      </Form.Group>
	      <Form.Group>
	      	<Form.Input fluid label='Password' placeholder='password' name="password"type="password" width={8} onChange={this.handleChange}/>
	      </Form.Group>
	      <Button type='submit'>Submit</Button>
	    </Form>
	    {this.renderError()}
	  </Segment>
	);
	}
};
export default connect(null, {saveToken})(Signin);