import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
	{auth: {authorization: localStorage.getItem('token') || "",
			user: {firstName: localStorage.getItem('firstName') || "",
				   _id: localStorage.getItem('_id') || "", lastName: localStorage.getItem('lastName') || ""} }}
	,composeEnhancer(applyMiddleware(reduxThunk))); 

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
//ReactDOM.render(<App/>, document.getElementById('root'));
