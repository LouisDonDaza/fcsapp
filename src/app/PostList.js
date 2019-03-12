import React from 'react';

import Post from 'app/Post';
class PostList extends React.Component {
	constructor(props){
		super(props)
	}
	renderPosts = () => {
		const {posts} = this.props;
		if(posts.length){
			return posts.map((post, index)=>{
				return (
					<Post key={post._id} post={post}/>
				);
			})
		}else{
			return (
				<h3>This section is empty. Help fill it up!</h3>
			);
		} 
	}
	render(){
		console.log('props is', this.props.posts);
		return (
			<div className="row">
				{this.renderPosts()}
			</div>
		);
	}
}
export default PostList;