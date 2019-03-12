import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Trending from 'app/Trending';

class Home extends React.Component {
	constructor(props){
		super(props)
	}
	renderSubjects= () =>{
		const {subject} = this.props;
		return(
			<div class="row">
				{subject.map(sub=>{
					return (
						<div class="col-md-4 col-lg-3 col-sm-6 my-2" style={{cursor: 'pointer'}}>
							<Link to={`/subject?code=${sub.code}`}>
								<div class="card text-center" style={{height: '100%'}}>
									<img src={sub.imageURL} alt={sub.name} class="card-img-top"/>
									<div class="card-body">
										<h5 class="card-title">{sub.name}</h5>
										<p class="card-text">{sub.description}</p>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
	render(){
		return (
			<div className="text-center mt-2">
				<h3>Subjects</h3>
				<hr/>
				{this.renderSubjects()}
				<Trending/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {subject: state.subject}
}
export default connect(mapStateToProps)(Home);