import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import reducers from './reducers';

window.axios = axios;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
	{auth: {authorization: localStorage.getItem('token') || "",
			user: {Organization: localStorage.getItem('Organization') || "",
				   firstName: localStorage.getItem('firstName') || "",
				   _id: localStorage.getItem('_id') || ""} }}
	,composeEnhancer(applyMiddleware(reduxThunk))); 

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
