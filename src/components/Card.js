import React from 'react';
import '../css/style.css';
import { connect } from 'react-redux';
import {editPost} from '../actions';

class Card extends React.Component {
	renderButtons = post => {
		const { auth, handleOpen} = this.props;
		if(auth.user._id === post._user){
			return (
					<div>
						<i className="trash icon" style={{cursor: 'pointer'}}onClick={()=> handleOpen(post)}></i>
					<i className="pen square icon" style={{cursor: 'pointer'}}onClick={()=> {this.props.editPost(post)}}></i>
					</div>
			);
		}
		else{
			return null;
		}
	}
	render(){
		const {settings, auth, post} = this.props;
		const {importance, title, body} = post;
		const {Organization} = auth.user; 
		return(
			<div className="myCard">
				<h3 className={`${settings[Organization][importance].color}--card`}>{title}</h3>
					<p>{body}</p>
				{this.renderButtons(post)}
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {auth: state.auth,
		settings: state.settings
	}
}
export default connect(mapStateToProps, {editPost})(Card);