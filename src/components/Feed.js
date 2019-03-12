import React from 'react';
import requireAuth from 'components/requireAuth';
import FeedMenu from 'components/FeedMenu';
import { connect } from 'react-redux';
import {fetchPosts, deletePost} from 'actions';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import Card from 'components/Card';
class Feed extends React.Component {
	state = {open: false, post: {}, filteredFetch: []}
	handleOpen = post => this.setState({open: true, post})
	handleClose = () => this.setState({open:false})
	componentDidMount(){
		this.props.fetchPosts()
	}
	filterFeed= importance => {
		const {feed} = this.props;
		if(importance === -1){
			this.setState({filteredFetch: []});
		}else{
			const filtered = feed.filter(post=> {
				return importance === post.importance;
			})
			this.setState({filteredFetch: filtered});
		}
	}
	renderPosts(){
		const {feed} = this.props;
		const {filteredFetch} = this.state;
		if(!feed.length){
			return(
				<h2 className="ui center aligned icon header">
					<i className="bookmark outline icon"></i>
					<div className="content">
						Posts
						<div className="sub header">Create a new post or find people to see more.</div>
					</div>
				</h2>
			);
		}else if(filteredFetch.length){
			return (
					<div className="cardlist">
						{filteredFetch.map(post=>{
							return (
								<Card post={post} handleOpen={this.handleOpen}/>
								)
						})}
					</div>
			);
		}
		else{
			return(
					<div className="cardlist">
						{feed.map(post=>{
							return (
								<Card post={post} handleOpen={this.handleOpen}/>
								)
						})}
					</div>
			);
		}
	}
	render(){
		const {post, open}= this.state;
		const {deletePost} = this.props;
		return(
			<div className="ui container">
				<div className="ui stackable grid" style={{textAlign:'center'}}>
					<div className="four wide centered column">
						<FeedMenu filterFeed={this.filterFeed}/>
					</div>
					<div className="twelve wide column">
						{this.renderPosts()}
					</div>
				</div>
				<Modal open={open} basic size='small'>
					<Header icon='trash' content='Delete Post' />
					<Modal.Content>
						<p>
							Are you sure you want to delete this post with Title: {post.title}?
						</p>
					</Modal.Content>
					<Modal.Actions>
						<Button basic color='red' inverted onClick={this.handleClose}>
							<Icon name='remove' /> No
						</Button>
						<Button color='green' inverted onClick={() => {this.handleClose()
							deletePost(post._id);
							this.props.fetchPosts();
						}}>
							<Icon name='checkmark' /> Yes
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {feed: state.feed
	};
}
const authComp = requireAuth(Feed);
export default connect(mapStateToProps, {fetchPosts, deletePost })(authComp);
