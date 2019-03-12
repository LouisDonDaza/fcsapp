import React from 'react';

class UserCard extends React.Component {
	render(){
		const {user} = this.props;
		return (
			<div className="card text-white text-center bg-info mb-3">
				<img src="https://images.pexels.com/photos/163142/glasses-notebook-wooden-business-163142.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="User"/>
				<div class="card-header">{user.firstName} {user.lastName}</div>
				  <div class="card-body">
				    <h5 class="card-title">{user.title} at {user.Organization}</h5>
				    <p class="card-text">{user.bio}</p>
					<span class="text-white">Tags: </span>
					<span class="badge badge-light mx-1">Chemistry</span>
					<span class="badge badge-light mx-1">Math</span>
					<span class="badge badge-light mx-1">Physics</span>
				</div>
			</div>
		);
	}
}

export default UserCard;