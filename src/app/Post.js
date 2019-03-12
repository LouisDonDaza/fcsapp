import React from 'react';
import {Link} from 'react-router-dom';
import {Modal, Icon, Header, Button, Form, Select} from 'semantic-ui-react';
class Post extends React.Component {
	constructor(props){
		super(props);
	}
	state = {
		like:false, 
		likes: this.props.post.likes, 
		open: false,
		edit: false,
		category: this.props.post.categoryName,
		title: this.props.post.title,
		Title: "",
		Input: "",
		body: this.props.post.body,
		user: this.props.post.author,
		userID: this.props.post._user
	}
	handleOpen = () => this.setState({open: true})
	handleClose = () => this.setState({open:false})
	editPost = () => {
		const {title, body} = this.state;
		this.setState({edit: true, Title: title, Input: body})
	}
	cancelEdit = () => {
		this.setState({edit: false, Title: "", Input: ""})
	}
	handleSubmit = () => {
		this.cancelEdit();
		const {Title, Input} = this.state;
		this.setState({
			title: Title,
			body: Input
		})
	}
	handleChange = (e, {name, value}) => {
		this.setState({[name]: value})
	}
	renderLike = () =>{
		const {like} = this.state;
		if(like){
			return (
				<i className="heart icon" 
				style={{cursor:'pointer'}}
				onClick={this.likePost}></i>
			);
		}else{
			return (
				<i className="heart outline icon" 
				style={{cursor:'pointer'}}
				onClick={this.likePost}></i>
			);
		}
	}
	renderButtons = () => {
		if(true){
			return null;
		}else {
			return (
			<div className="float-right">
				<i className="edit icon" style={{cursor: 'pointer'}} onClick={this.editPost}></i>
				<i className="trash icon" style={{cursor: 'pointer'}} onClick={this.handleOpen}></i>
			</div>
		);
		}
		
	}
	renderModals = () => {
		const {open, edit, Title, Input} = this.state;
		if(true){
			return null;
		}else{
			return (
			<div>
				<Modal open={open} basic size='small' style={{position:'absolute', top: '50%', left: '50%', transform:'translate(-50%,-50%)', height: 'auto'}}>
					<Header icon='trash' content='Delete Post' />
					<Modal.Content>
						<p>
							Are you sure you want to delete this post?
						</p>
					</Modal.Content>
					<Modal.Actions>
						<Button basic color='red' inverted onClick={this.handleClose}>
							<Icon name='remove' /> No
						</Button>
						<Button color='green' inverted onClick={() => {this.handleClose()
						}}>
							<Icon name='checkmark' /> Yes
						</Button>
					</Modal.Actions>
				</Modal>
				<Modal size="small" dimmer="blurring" open={edit} onClose={this.cancelEdit} style={{position:'absolute', top: '50%', left: '50%', transform:'translate(-50%,-50%)', height: 'auto'}}>
	      		<Modal.Content>
	      			<Form onSubmit={this.handleSubmit}>
	      				<Form.Input name="Title" label="Title" onChange={this.handleChange} value={Title} autoFocus/>
	      				<Form.Group>
	      					<Form.TextArea name="Input" label="User input" width={12} onChange={this.handleChange} value={Input}/>
	      				</Form.Group>
	      				<Form.Field control={Button} color='teal'>Submit</Form.Field>
	      			</Form>
	      		</Modal.Content>
	      		<Modal.Actions>
			        <Button color='red' onClick={this.cancelEdit}>
			            Cancel
			        </Button>
			    </Modal.Actions>
	    		</Modal>
			</div>
		);
		}
		
	}
	likePost = () =>{
		const {like} = this.state;
		if(like){
			this.setState((prevState, props)=>({
				likes: prevState.likes - 1,
				like: false
			}))
		}else{
			this.setState((prevState, props)=>({
				likes: prevState.likes + 1,
				like: true
			}))
		}
	}
	render(){
		const {category, title, body, user,userID} = this.state;
		return (
			<div className="col-md-6 mt-lg-2 mt-3">
				<div className="card text-center" style={{height: '100%'}}>
					<div className="card-header">
						{category}
						{this.renderButtons()}
					</div>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{body}</p>
						<Link to={`/account?user=${userID}`}>{user}</Link>
						<div className="float-right">
							{this.state.likes} {this.renderLike()}
						</div>
					</div>
				</div>
				{this.renderModals()}
			</div>
		);
	}
}
export default Post;