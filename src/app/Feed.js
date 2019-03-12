import React from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import PostList from 'app/PostList';
import NewPost from 'app/NewPost';
import {Link} from 'react-router-dom';

import {fetchPosts} from 'actions';
import {myAPI} from 'api';
class Subject extends React.Component {
	constructor(props){
		super(props)
		this.dropdownuno = React.createRef();
		this.dropdowndos = React.createRef();
	}
	state = {
		selectedSub: {name: 'Loading...', "subcatdesc": [
            {
                "_id": "5c7c64972dcb1840f87d40ee",
                "category": 350,
                "description": "The study of carbon compounds",
                "name": "Organic Chemistry"
            }
        ]}, selectedCat: "All", posts: []
    }
    toggleDropdown = ref =>{
    	ref.current.classList.toggle('show');
    }
    componentDidMount(){
    	const {subject, fetchPosts, location} = this.props;
    	fetchPosts(location.search);
    	const qValues = queryString.parse(location.search);
    	const givenSubject = subject[qValues.code-1];
    	const foundCategory = givenSubject.subcatdesc.filter(subcat=>{
    		return subcat.category === +qValues.category;
    	});
    	if(foundCategory.length){
    		const category = foundCategory[0];
			this.setState({selectedSub: givenSubject, selectedCat: category.name})
    	}else{
    		this.setState({selectedSub:givenSubject, selectedCat: 'Not Found'})
    	}
    	  	
    }
    renderSubjects = () => {
    	const {subject, location, fetchPosts} = this.props;
    	return subject.map(item=> {
    		return (
    			<Link to={`/feed?code=${item.code}&category=0`} className="dropdown-item"
    			onClick={()=>{
    				this.setState({selectedSub: item, selectedCat: 'All'})
    				fetchPosts(`?code=${item.code}&category=0`)
    			}}>{item.name}</Link>
    		);
    	})
    }
    renderCategories = () => {
    	const {subcatdesc, code} = this.state.selectedSub;
    	const {fetchPosts, location} = this.props;
    	return subcatdesc.map(item=>{
    		return (
    			<Link to={`/feed?code=${code}&category=${item.category}`} 
    			className="dropdown-item"
    			onClick={()=> {
    				this.setState({selectedCat: item.name})
    				fetchPosts(`?code=${code}&category=${item.category}`);
    			}}>
    				{item.name}
    			</Link>
    		);
    	})
    }
    fetchPosts = async () => {
    	const response = await myAPI.get(`/posts${this.props.location.search}`)
    	console.log('response is', response);
    	return response['data'];
    }
	renderFeed=(chosenCategory)=>{
		const {selectedSub, selectedCat} = this.state;
		const {location, fetchPosts} = this.props;
		return (
			<div>
				<div className="row justify-content-center">
					<div className="dropdown m-2">
					  <button className="btn btn-secondary dropdown-toggle btn-lg" type="button" 
					  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
					  onClick={()=> this.toggleDropdown(this.dropdownuno)}>
					    {selectedSub.name}
					  </button>
					  <div className="dropdown-menu" ref={this.dropdownuno}>
					    {this.renderSubjects()}
					  </div>
					</div>
					<div className="dropdown m-2">
					  <button className="btn btn-secondary dropdown-toggle btn-lg" type="button" 
					  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
					  onClick={()=> this.toggleDropdown(this.dropdowndos)}>
					    {selectedCat}
					  </button>
					  <div className="dropdown-menu" ref={this.dropdowndos}>
					    <Link to={`/feed?code=${selectedSub.code}&category=0`} className="dropdown-item"
					    onClick={()=>{
					    	this.setState({selectedCat: 'All'})
					    	fetchPosts(`?code=${selectedSub.code}&category=0`);
					    }}>All</Link>
					    {this.renderCategories()}
					  </div>
					</div>
				</div>
				<div className="row justify-content-center my-2">
					<NewPost/>
				</div>
			</div>
		);
	}
	render(){
		return (
			<div>
				{this.renderFeed()}
				<PostList posts={this.props.posts}/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {subject: state.subject, posts: state.feed}
}
export default connect(mapStateToProps, {fetchPosts})(Subject);