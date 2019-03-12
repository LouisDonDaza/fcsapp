import React from 'react';
import {Button, Modal, Header,Form, Select} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {myAPI} from 'api';
class NewPost extends React.Component {
	state = {
		open: false,
		Title: "",
		Input: "",
		Subject: 0,
		Category: 0,
		subOptions: [],
		catOptions: [],
		categoryName: "",
		errMsg: ""
	}
	componentDidMount(){
		const {subject} = this.props;
		const subArray = subject.map((item,index) => {
			return {key: index, text: item.name, value:item.code}
		});
		this.setState({subOptions: subArray});
	}
	handleOpen = () => this.setState({open: true})
	handleClose = () => this.setState({open:false, errMsg: ""})
	handleChange = (event) => {
		const {name, value} = event.target;
		this.setState({[name]: value})
	}
	// handleSubjectChange = (event, {name, value}) => {
	// 	console.log('subject changed!');
	// 	this.setState({[name]: value});
	// }
	handleSubmit = event => {
		event.preventDefault();
		const {Title, Input, Subject, Category, categoryName} = this.state;
		const{firstName, lastName} = this.props.auth.user;
		const fullName = firstName + ' ' + lastName;
		if(Subject === 0 || Category === 0 || Title.length !==0 || Input.length !== 0){
			this.setState({errMsg: "Pls fill in all fields"})
			return;
		}
		myAPI.post('/posts/new', {
			title: Title,
			text: Input,
			Subject,
			Category,
			fullName,
			categoryName
		})
		this.setState({open: false,
		Title: "",
		Input: "", Subject: 0, Category: 0, errMsg: ""})
	}
	handleSubjectChange = (event, {name, value}) => {
		const {subject} = this.props;
		const catArray = subject[value-1].subcatdesc.map((item, index)=>{
			return {key: index, text: item.name, value: item.category};
		})
		this.setState({Subject: value, catOptions: catArray})
	}
	handleCatChange = (event, {name, value}) => {
		this.setState({[name]: value, categoryName: event.target.innerText})
	}
	renderModals = () => {
		const {open, Title, Input, subOptions, catOptions} = this.state;
		return (
			<div>
				<Modal size="small" dimmer="blurring" open={open} onClose={this.handleClose} style={{position:'absolute', top: '50%', left: '50%', transform:'translate(-50%,-50%)', height: 'auto'}}>
	      		<Modal.Content>
	      			<Form onSubmit={this.handleSubmit}>
	      				<Form.Group>
	      					<Form.Input
				     	name="test"
				        control={Select}
				        options={subOptions}
				        label={{ children: 'Subject', htmlFor: 'form-select-control-subjects' }}
				        placeholder='Subject'
				        search
				        searchInput={{ id: 'form-select-control-subjects' }}
				        onChange={this.handleSubjectChange}
				     />
				     <Form.Input
				     	name="Category"
				        control={Select}
				        options={catOptions}
				        label={{ children: 'Category', htmlFor: 'form-select-control-categories' }}
				        placeholder='Category'
				        search
				        searchInput={{ id: 'form-select-control-categories' }}
				        onChange={this.handleCatChange}
				     />
	      				</Form.Group>
	      				<Form.Input name="Title" label="Title" onChange={this.handleChange} value={Title} autoFocus/>
	      				<Form.Group>
	      					<Form.TextArea name="Input" label="Content" width={12} onChange={this.handleChange} value={Input}/>
	      				</Form.Group>
	      				<Form.Group className="mt-2">
	      					<Button color='red' onClick={this.handleClose} type="button" className="ml-2">
			            Cancel
			       		</Button>
	      				<Form.Field control={Button} color='teal'>Submit</Form.Field>
	      				</Form.Group>
	      				
	      			</Form>
	      			{this.renderError()}
	      		</Modal.Content>
	    		</Modal>
			</div>
		);
	}
	renderError = () => {
		if(!this.state.errMsg){
			return null;
		}else{
			return (
				<div className="ui fluid red message">
				  <p>{this.state.errMsg}</p>
				</div>
			);
		}
	}
	render(){
		if(this.props.auth.authorization.length){
			const {open} = this.state;
		return(
			<div>
				<Button open={open} color="teal" onClick={this.handleOpen}>New Post<i className="magic icon right aligned"></i></Button>
				{this.renderModals()}
			</div>
		);
	}else{
		return null;
		
	}
	}
}
const mapStateToProps = state => {
	return {subject: state.subject, auth: state.auth}
}
export default connect(mapStateToProps)(NewPost);

/*
<Form.Group>
	      					<Form.Input
				     	name="Category"
				        control={Select}
				        options={catOptions}
				        fluid
				        label={{ children: 'Category', htmlFor: 'form-select-control-categories' }}
				        placeholder='Category'
				        search
				        searchInput={{ id: 'form-select-control-categories' }}
				        onChange={this.handleChange}
				     />
	      				</Form.Group>

	<Modal.Actions>
			        <Button color='red' onClick={this.handleClose}>
			            Cancel
			        </Button>
			    </Modal.Actions>
*/