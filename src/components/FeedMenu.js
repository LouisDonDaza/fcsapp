import React from 'react';
import {Menu, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import CardForm from './CardForm';
import { open } from '../actions';
class FeedMenu extends React.Component {
	state = { activeItem: 'home'}
  	handleItemClick = (e, { name, importance }) => {
  		this.setState({ activeItem: name });
  		this.props.filterFeed(importance); 
  	}
	render(){
		const { activeItem} = this.state;
		const {settings, auth, open} = this.props;
		const {Organization} = auth.user;
		return (
		<div>
	      <Menu inverted vertical>
	      	{settings[Organization].map(subject=> {
	      		return (
	      			<Menu.Item
	      			key={subject.value}
			          name={subject.key}
			          color={subject.color}
			          active={activeItem === subject.key}
			          importance={subject.value}
			          onClick={this.handleItemClick}
			        />
	      		);
	      	})
	      	}
	      	<Menu.Item
	      			key={-1}
			          name={'all'}
			          color={'grey'}
			          active={activeItem === 'all'}
			          importance={-1}
			          onClick={this.handleItemClick}
			        />
	      </Menu>
	      <Button onClick={open} color="teal">New Post<i className="magic icon right aligned"></i></Button>
	      <CardForm edit={false}/>
		</div>
	);
	}
}

const mapStateToProps = state => {
	return {auth: state.auth,
		settings: state.settings
	};
}
export default connect(mapStateToProps, {open})(FeedMenu);
