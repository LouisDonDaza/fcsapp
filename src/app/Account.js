import React from 'react';
import {connect} from 'react-redux';
import history from '../history';
import {myAPI} from 'api';
import queryString from 'query-string';

import {fetchPosts} from 'actions';
import UserCard from 'app/UserCard';
import PostList from 'app/PostList';
class Account extends React.Component {
	constructor(props){
		super(props)
	}
	state = {found: false, user: null}
	componentDidMount(){
		const {search} = this.props.location;
		//if search term given and that user is found, load page
		//otherwise redirect to homepage
		if(search.length){
			myAPI.get(`/account${search}`)
		.then(info=>{
			if(typeof(info.data) ==='string'){
				//this.setState({found:false})
				this.redirect();
			}
			console.log('info is', info);
			this.setState({user: info['data'], found:true})
			this.props.fetchPosts(`/account${search}`)
		});
		}else{
			this.redirect();
		}
		console.log('state is', this.state);
	}
	redirect() {
		setTimeout(()=>{
				history.push('/');
			}, 3000);
	}
	userFound = () => {
		const {found, user} = this.state;
		if(found && user){
			return (
			<div className="row mt-2">
				<div className="col-lg-4">
					<UserCard user={user}/>
				</div>
				<div className="col-lg-8">
					<PostList posts={this.props.posts}/>
				</div>
			</div>
			)
		}else{
			return (
		<div class="jumbotron jumbotron-fluid">
		  <div class="container">
		    <h1 class="display-4">User Not Found</h1>
		    <p class="lead">Redirecting you back to homepage in 3 seconds</p>
		  </div>
		</div>
	);
		}
	}
	render(){
		return (
			<div>
				{this.userFound()}
			</div>
		)
	}
}
const mapStateToProps = state =>{
	return {posts: state.feed}
}
export default connect(mapStateToProps, {fetchPosts})(Account);