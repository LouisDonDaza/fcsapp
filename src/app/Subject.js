import React from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import {myAPI} from 'api';
import history from '../history';
class Subject extends React.Component {
	// constructor(props){
	// 	super(props)
	// }
	state = {categories: [
			{
                "_id": "5c7c64972dcb1840f87d40ee",
                "category": 350,
                "description": "Loading...",
                "name": "Loading..."
            }
		], selectedSub: {name: 'Loading...'}, subjectFound: true}
    componentDidMount(){
    	const {search} = this.props.location;
    	const qValues = queryString.parse(search);
		const code = +qValues.code;
		const selectedSub = this.props.subject.filter(sub=>{
			return sub.code === code;
		})
		myAPI.get(`/subject${search}`).then(info=>{
			//if there is such a subject in our database
			//setup the component
			//otherwise redirect home
			if(info['data'].length){
				this.setState({selectedSub: info['data'][0], categories: info['data'][0].subcatdesc})
			}else{
				this.setState({subjectFound: false});
			}
		});
		//, categories: selectedSub[0].subcatdesc
    }
	renderDesc=()=>{
		const {categories} = this.state;
		const {search} = this.props.location;
		return(
			<div className="mt-3">
				<Link to={`/feed${search}`}>
					<h1>{this.state.selectedSub.name}</h1>
				</Link>
				
				<div className="row">
					{categories.map(cat=>{
						return(
							<div className="col-12">
								<hr/>
								<Link to={`/feed${search}&category=${cat.category}`}>
								<h2>{cat.category} - {cat.name}</h2>
								</Link>
								<p className="lead">{cat.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
	notFound = () => {
		if(!this.state.subjectFound){
			setTimeout(()=>{
				history.push('/');
			}, 3000)
			return (
				<div class="jumbotron jumbotron-fluid">
				  <div class="container">
				    <h1 class="display-4">Subject Not Found</h1>
				    <p class="lead">Redirecting you back to homepage in 3 seconds</p>
				  </div>
				</div>
			);
		}
	}
	render(){
		return (
			<div className="mb-3">
				{this.renderDesc()}
				{this.notFound()}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {subject: state.subject}
}
export default connect(mapStateToProps)(Subject);