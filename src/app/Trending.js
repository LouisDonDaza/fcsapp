import React from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from 'actions';
import PostList from 'app/PostList';
class Trending extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.fetchPosts('/trending');
	}
	render(){
		return (
			<div className="text-center">
				<h3>Trending</h3>
				<hr/>
				<PostList posts={this.props.posts}/>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {posts: state.feed}
}
export default connect(mapStateToProps, {fetchPosts})(Trending);