import React from 'react';
import { connect } from 'react-redux';
import {grantAccess} from '../api';

export default ChildComponent => {
	class ComposedComponent extends React.Component {
		state = {authorized: false}
		componentDidMount(){
			const { authorization } = this.props.auth;
			grantAccess.get('/',{
				headers: {authorization, 'Content-type': 'application/json'}
			}).then(()=>{
				this.setState({authorized: true})
			})
			.catch(err=>{
				console.log(err);
			})
		}
		// componentDidUpdate(){
		// 	console.log('updated');
		// }
		renderFeed(){
			if(this.state.authorized){
				return (
					<div>
					<ChildComponent {...this.props}/>
				</div>
				)
			}else{
				return(
					<h2 className="ui center aligned icon header">
					  <i className="address card icon"></i>
					  <div className="content">
					    Access Denied
					    <div className="sub header">You must be logged in to access this page.</div>
					  </div>
				</h2>
				);
			}
		}
		render(){
			return(
			<div>
				{this.renderFeed()}
			</div>
			);
		}
	}

	const mapStateToProps = state => {
		return {auth: state.auth};
	}
	return connect(mapStateToProps)(ComposedComponent);
};