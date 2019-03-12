import React from 'react';
import {Modal, Form, Button, Select} from 'semantic-ui-react';
import {connect } from 'react-redux';
import {close , fetchPosts} from 'actions';
class CardForm extends React.Component {
	state = {Type: 0, Input: "", Title: "", touched: false};
	handleChange = (e, {name, value}) => {
		this.setState({[name]: value})
	}
  	handleSubmit = () => {
  		const {authorization} = this.props.auth;
  		const { Type, Input, Title } = this.state;
  		const {edit, values} = this.props.modal;
  		if(edit){
  			console.log('Post to be edited', values);
  			fetch('https://skillshareapi.herokuapp.com/posts/edit',{
  			method: 'POST',
			headers: {authorization, 'Content-type': 'application/json'},
			body: JSON.stringify({
				postID: values._id,
				title: Title,
				text: Input,
				value: Type
				})
			})
  		}else{
  			fetch('https://skillshareapi.herokuapp.com/posts/new',{
  			method: 'POST',
			headers: {authorization, 'Content-type': 'application/json'},
			body: JSON.stringify({
				title: Title,
				text: Input,
				value: Type
			})
  		})
  		}
  		
  		this.props.close();
  		this.props.fetchPosts();
  	}
  	handleClose=()=>{
  		this.setState({Type: 0, Input: "", Title: "", touched: false})
  		this.props.close();
  	}
  	editMode(){
  		const {edit} = this.props.modal;
  		if(edit){
  			return (
  				<Form.Field control={Button} color='green'>Edit</Form.Field>
  			);
  		}
  		else{
  			return (
  				<Form.Field control={Button} color='teal'>Submit</Form.Field>
  			);
  		}
  	}
  	getCardValues(){
  		const {modal} = this.props;
  		if(modal.edit && !this.state.touched){
  			const {importance, title, body} = modal.values;
  			this.setState({Title: title, Input: body, Type: importance, touched: true});
  		}
  	}
	render(){
		const { Type, Input, Title } = this.state;
		const {settings, auth, modal} = this.props;
		const {Organization} = auth.user;
		const {open} = modal;
		return (
		<Modal size="small" dimmer="blurring" open={open} onClose={this.handleClose}>
	      		<Modal.Content>
	      			<Form onSubmit={this.handleSubmit} onTouchStart={()=>this.getFormValues()}>
	      				<Form.Input name="Title" label="Title" onChange={this.handleChange} value={Title} autoFocus onFocus={()=>this.getCardValues()}/>
	      				<Form.Group>
	      					<Form.TextArea name="Input" label="User input" width={12} onChange={this.handleChange} value={Input}/>
	      				</Form.Group>
	      				<Form.Input
	      				name="Type"
				        control={Select}
				        options={settings[Organization]}
				        fluid selection
				        label={{ children: 'Type', htmlFor: 'form-select-control-type' }}
				        placeholder='Post Type'
				        search
				        searchInput={{ id: 'form-select-control-type' }}
				     	width={10}
				     	onChange={this.handleChange}
				     	value={Type}/>
				     	{this.editMode()}
	      			</Form>
	      		</Modal.Content>
	      		<Modal.Actions>
			        <Button color='red' onClick={this.handleClose}>
			            Cancel
			        </Button>
			    </Modal.Actions>
	    </Modal>
	    );
	}
}
const mapStateToProps = state => {
	return {auth: state.auth,
		settings: state.settings,
		modal: state.modal
	};
}
export default connect(mapStateToProps, {close, fetchPosts})(CardForm);