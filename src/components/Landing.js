import React from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {saveToken} from '../actions';
class Landing extends React.Component {
	handleDemo = async (email, password)  => {
		const res = await fetch('https://skillshareapi.herokuapp.com/signin', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
		    body: JSON.stringify({email, password})
		})
		const data = await res.json();
		this.props.saveToken(data);
	}
	render(){
		const {authorization} = this.props.auth;
		return (
		<div>
			<h2 className="ui center aligned icon header">
			  <i className="circular icon users"></i>
			  Flair, Care, Share
			</h2>
			<div className="ui three column grid fluid stackable">
				<div className="column">
				  	<div className="ui segment center aligned row">
				    	<img src="https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Work" className="ui fluid image"/>
				    	<h3 className="ui center aligned header">Look more flair for work as you stay on top of things</h3>
						<Button color='green' disabled> Work In Progress </Button>
					</div>
				  </div>
				<div className="column">
				    <div className="ui segment center aligned row">
				      <img src="https://images.pexels.com/photos/1246953/pexels-photo-1246953.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Community" className="ui fluid image"/>
				      <h3 className="ui center aligned header">Care more for your community by staying up-to-date with current events</h3>
				      <Button color='green' disabled={authorization.length} onClick={()=> {this.handleDemo('george@gmail.com', 'password')}}> Demo </Button>
				    </div>
				  </div>
				<div className="column">
				    <div className="ui segment center aligned row">
				      <img src="https://images.pexels.com/photos/1288488/pexels-photo-1288488.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Student" className="ui fluid image"/>
				      <h3 className="ui center aligned header">Share notes or tips with other students</h3>
				      <Button color='green' disabled={authorization.length} onClick={()=> {this.handleDemo('stacy@gmail.com', 'password')}}> Demo </Button>
				    </div>
				</div>
			</div>
		</div>
	)
	}
	
};
const mapStateToProps = state => {
	return {auth: state.auth}
}
export default connect(mapStateToProps, {saveToken})(Landing);