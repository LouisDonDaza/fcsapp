import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {signOut }from '../actions';
class Header extends React.Component {
	renderSignin(){
		const {authorization, user} = this.props.auth;
		if(authorization.length){
			return [
				<li style={{display: 'inline-block'}}>
					<h4 style={{color: 'snow'}}>Welcome, {user.firstName}!</h4>
				</li>,
				<li style={{display: 'inline-block'}}>
					<Link style={{margin: '0 5px'}}to="/">
			            <Button primary onClick={()=>{
			            	this.props.signOut();
			            }}>Log Out</Button>
			        </Link>
			    </li>
			];
		}else{
			return [
			<li style={{display: 'inline-block'}}><Link style={{margin: '0 5px'}}to="/signin">
		            <Button color='green'>Log In</Button>
		            </Link></li>,
		    <li style={{display: 'inline-block'}}><Link style={{margin: '0 5px'}}to="/register">
		            <Button primary>Register</Button>
		            </Link></li>
			]
		}
	}
	renderUserMenu(){
		const {authorization} = this.props.auth;
		if(authorization.length){
			return (
				<div>
			        <Input icon='users' iconPosition='left' placeholder='Search users...' />
			    </div>
			);
		}else{return null;}
	}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	render(){
		const {user} = this.props.auth;
		return(
			<div class="ui inverted menu">
			  <Link to="/" className="item">
				    <i class="home icon"></i>
			  </Link>
			  <Link to="/feed" className="item">Feed</Link>
			  <Link to={`/accounts/${user._id}`} className="item">
						Account
			  </Link>
			  <Link to="/search/accounts">
			  	<Input icon='users' iconPosition='left' placeholder='Search users...' />
			  </Link>
			  <div class="right menu">
			    <ul style={{listStyle: 'none', margin: '2px' }}>
		       	  	{this.renderSignin()}
		       	  </ul>
			  </div>
			</div>
		)
	}
};
const mapStateToProps = state => {
	return {auth: state.auth}
}
export default connect(mapStateToProps, {signOut})(Header);