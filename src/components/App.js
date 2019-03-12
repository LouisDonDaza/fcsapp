import React from 'react';
import { Router, Route} from 'react-router-dom';
import history from '../history';
import Landing from 'components/Landing';
import Signin from 'components/Signin';
import Register from 'components/Register';
import Header from 'components/Header';
import Feed from 'components/Feed';
import SearchUser from 'components/SearchUser';
import Account from 'components/Account';
class App extends React.Component {
	render(){
		return(
			<div className="ui container">
				<Router history={history}>
					<div>
						<Header/>
						<Route path="/" exact component={Landing}/>
						<Route path="/signin" exact component={Signin}/>
						<Route path="/register" exact component={Register}/>
						<Route path="/feed" exact component={Feed}/>
						<Route path="/search/accounts" exact component={SearchUser}/>
						<Route path="/accounts/:id" exact component={Account}/>
					</div>
				</Router>
			</div>
		)
	}
}
export default App;