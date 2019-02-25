import React from 'react';
import {Card, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {followUser, unFollowUser} from '../actions';
import requireAuth from './requireAuth';

class SearchUser extends React.Component {
	state = {fetched: [], filterFetched: [], fetchedUser: {}}
	componentDidMount(){
		const {authorization, user} = this.props.auth;
		fetch('https://skillshareapi.herokuapp.com/accounts/search', {
			method:'POST',
			headers: {authorization}
		}).then(res=> res.json()).then(data=> this.setState({fetched: data}))
		fetch('https://skillshareapi.herokuapp.com/accounts/user', {
			method:'GET',
			headers: {authorization, 'accountid': user._id}
		}).then(res=> res.json()).then(data=> this.setState({fetchedUser: data}))
	}

	renderFollow(accountID){
		const {unFollowUser, followUser} = this.props;
		const {fetchedUser} = this.state;
		let following = false;
		if(accountID === fetchedUser._id){
			return null;
		}
		if(fetchedUser.following){
			fetchedUser.following.forEach(ID => {
			if(ID === accountID){
				following = true;
				return;
			}
		})
		}
		if(following){
			return (
					<Button basic color='teal' onClick={()=> {
						unFollowUser(accountID)
					}} style={{maxWidth: '200px'}}>
					    Unfollow
					</Button>
				)
		}else{
			return (
			<Button basic color='teal' onClick={()=> {
				followUser(accountID)
			}} style={{maxWidth: '200px'}}>
			    Follow
			</Button>
			)
		}
		
	}
	renderUsers(){
		const {fetched} = this.state;
		if(fetched.length){
			return (
			fetched.map(user => {
				return (
				<Card key={user._id}>
			      <Card.Content>
			        <Card.Header>{`${user.firstName} ${user.lastName}`}</Card.Header>
			        <Card.Meta>{user.Organization}</Card.Meta>
			        <Card.Description>
			          A new face is in town, check them out!
			        </Card.Description>
			      </Card.Content>
			      <Card.Content extra>
			        <div className='ui center aligned'>
			          <Link to={`/accounts/${user._id}`} style={{maxWidth: '200px'}}>
			          <Button basic color='green'>
			            Visit
			          </Button>
			          </Link>
			          {this.renderFollow(user._id)}
			        </div>
			      </Card.Content>
			    </Card>
				);
			})
			);
		}else{
			return(
				<h3 class="ui center aligned">
					No users
				</h3>
			);
		}
	}
	render(){
		return(
			<div>
				{this.renderUsers()}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {auth: state.auth};
}
const authSearch = requireAuth(SearchUser);
export default connect(mapStateToProps, {followUser, unFollowUser})(authSearch);