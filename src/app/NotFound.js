import React from 'react';
import history from '../history';
class NotFound extends React.Component {
	componentDidMount(){
		setTimeout(()=>{
			history.push('/fcsapp');
		}, 5000);
	}
	render(){
		return (
		<div class="jumbotron jumbotron-fluid">
		  <div class="container">
		    <h1 class="display-4">Page Not Found</h1>
		    <p class="lead">Redirecting you back to homepage in 5 seconds</p>
		  </div>
		</div>
	);
	}
	
}
export default NotFound;