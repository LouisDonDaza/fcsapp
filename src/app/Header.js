import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Input} from 'semantic-ui-react';

import {signOut} from 'actions';
class Header extends React.Component {
	constructor(props){
		super(props)
		this.navRef = React.createRef();
		this.linkOneRef = React.createRef();
		this.linkTwoRef = React.createRef();
		this.linkThreeRef = React.createRef();
		this.refArray = [this.linkOneRef, this.linkTwoRef];
	}
	state = {activeLink: -1};
	toggleNav = () =>{
		this.navRef.current.classList.toggle('show');
	}
	toggleLink = (refIndex) =>{
		const {activeLink} = this.state;
		this.refArray.forEach((link, index)=>{
			if(index === activeLink){
				link.current.classList.toggle('active');
			}else if(index === refIndex){
				link.current.classList.toggle('active');
				// console.log('index is', refIndex);
			}
		})
		this.setState({activeLink: refIndex})
	}
	renderSignin = ()=>{
		const {authorization, user} = this.props.auth;
		if(authorization.length){
			return [
				<li style={{display: 'inline-block'}}>
					<h4 style={{color: 'snow'}}>Welcome, {user.firstName}!</h4>
				</li>,
				<li style={{display: 'inline-block'}}>
					<Link style={{margin: '0 5px'}}to="/" onClick={()=>{
			            	this.props.signOut();
			            }} className="btn btn-primary">
			            Log Out
			        </Link>
			    </li>
			];
		}else{
			return [
			<li style={{display: 'inline-block'}}><Link style={{margin: '0 5px'}}to="/login">
		            <Button color='green'>Log In</Button>
		            </Link></li>,
		    <li style={{display: 'inline-block'}}><Link style={{margin: '0 5px'}}to="/register">
		            <Button primary>Register</Button>
		            </Link></li>
			]
		}
	}
	render(){
		const {authorization, user} = this.props.auth;
		let query = "";
		if(authorization.length){
			query = '?user=' + user._id;
		}
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/" className="navbar-brand ml-lg-5 ml-sm-3">
					<a onClick={()=>{this.toggleLink(-1)}}>wisDOM</a>
				</Link>
				
				<button className="navbar-toggler" type="button" onClick={this.toggleNav}>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" ref={this.navRef}>
					<ul className="navbar nav mr-auto mt-2 mt-lg-0 nav nav-pills flex-column flex-lg-row">
						<li className="nav-item">
							<Link to="/trending" className="nav-link">
								<a className="nav-link" ref={this.linkOneRef} onClick={()=>{this.toggleLink(0)}}>Trending</a>
							</Link>
							
						</li>
						<li className="nav-item">
							<Link to={`/account${query}`} className="nav-link">
								<a ref={this.linkTwoRef} className="nav-link" onClick={()=>{this.toggleLink(1)}}>Account</a>
							</Link>
						</li>
					</ul>
					{this.renderSignin()}
				</div>
			</nav>
		);
	}
}
const mapStateToProps = state => {
	return {auth: state.auth}
}
export default connect(mapStateToProps, {signOut})(Header);