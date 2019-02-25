import React from 'react';
import requireAuth from './requireAuth';
import {connect} from  'react-redux';
class Account extends React.Component {
	state={user: null, posts: null};

	componentDidMount(){
		const {id} = this.props.match.params;
		const {authorization} = this.props.auth;
		fetch('https://skillshareapi.herokuapp.com/posts/user',{
  			method: 'GET',
			headers: {authorization, 'Content-type': 'application/json', 'accountID': id}
			}).then(res=>res.json())
			.then(data=>{
				console.log('posts are', data);
				this.setState({posts: data})
			}
			).catch(err=>console.log('No user found'));
		fetch('https://skillshareapi.herokuapp.com/accounts/user',{
  			method: 'GET',
			headers: {authorization, 'Content-type': 'application/json', 'accountID': id}
			}).then(res=>res.json())
			.then(data=>{
				console.log('user is', data);
				this.setState({user: data});
			}
			).catch(err=>console.log('No user found'));
	}

	formatName(name) {
	    return name.charAt(0).toUpperCase() + name.slice(1);
	}
	userFound(){
		if(this.state.user === null){
			return(
				<div>
				<h2 class="ui center aligned icon header">
				  <i class="close icon"></i>
				  User not found
				</h2>
			</div>
			)
		}else{
			const {firstName, lastName} = this.state.user;
			const fullName = this.formatName(firstName) + ' ' + this.formatName(lastName); 
			return(
			<div>
				<h2 class="ui center aligned icon header">
				  <i class="user circle icon"></i>
				  {fullName}
				</h2>
			</div>
		)
		}
	}
	render(){
		return(
			<div>
				{this.userFound()}
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}
const authAccount = requireAuth(Account);
export default connect(mapStateToProps)(authAccount);