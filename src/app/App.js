import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history';
import {connect} from 'react-redux';

import Trending from 'app/Trending';
import Account from 'app/Account';
import Header from 'app/Header';
import Home from 'app/Home';
import Subject from 'app/Subject';
import Feed from 'app/Feed';
import NotFound from 'app/NotFound';
import Login from 'app/Login';
import Register from 'app/Register';
import {fetchSubject} from 'actions';
import {myAPI} from 'api';
class App extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.fetchSubject()
		myAPI.defaults.headers.common['authorization'] = this.props.auth.authorization;
	}
	render(){
		return (
				<Router history={history}>
					<div>
						<Header/>
						<div className="container">
						<Route path="/" exact component={Home}/>
						<Route path="/trending" exact component={Trending}/>
						<Route path="/account" exact component={Account}/>
						<Route path="/subject" exact component={Subject}/>
						<Route path="/feed" exact component={Feed}/>
						<Route path="/login" exact component={Login}/>
						<Route path="/register" exact component={Register}/>
						</div>
					</div>
				</Router>
		);
	}
}
const mapStateToProps = state => {
	return {auth: state.auth}
}
export default connect(mapStateToProps, {fetchSubject})(App);