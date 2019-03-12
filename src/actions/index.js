import history from '../history';
import {myAPI} from 'api';

export const saveToken = data => async dispatch => {
	localStorage.setItem('token', data.token)
	localStorage.setItem('firstName', data.user.firstName);
	localStorage.setItem('_id', data.user._id);
	localStorage.setItem('lastName', data.user.lastName);
	dispatch({type: 'USER_INFO', payload: data.user})
	dispatch({type: 'TOKEN', payload: data.token})
	history.push('/');
}
export const signOut = () => {
	history.push('/');
	localStorage.removeItem('token');
	localStorage.removeItem('Organization');
	localStorage.removeItem('firstName');
	localStorage.removeItem('_id');
	return({type: 'SIGN_OUT'});
}
export const fetchPosts = (query) => async (dispatch) => {
	// const {authorization} = getState().auth;
	// const res = await fetch('https://skillshareapi.herokuapp.com/posts', {
	// 	method: 'GET',
	// 	headers: {authorization}
	// });
	// const data = await res.json()
	console.log(query);
	const response = await myAPI.get(`/posts${query}`)
	dispatch({type:'FETCH_FEED', payload: response['data']});
}
export const deletePost = PostID => async (dispatch, getState) =>{
	const {authorization} = getState().auth;
	await fetch('https://skillshareapi.herokuapp.com/posts/delete',{
		method: 'POST',
		headers: {authorization, 'Content-type': 'application/json'},
		body: JSON.stringify({
			PostID: PostID
		})
	})
}
export const followUser = accountID => async (dispatch, getState) => {
	const {authorization, user} = getState().auth;
	await fetch('https://skillshareapi.herokuapp.com/accounts/follow',{
			method: 'POST',
			headers: {authorization, 'Content-type': 'application/json'},
			body: JSON.stringify({
				accountID: accountID
			})
		})
	if(user){
		user.following.push(accountID);
		dispatch({type: 'FOLLOW', payload: user});
	}
}
export const unFollowUser = accountID => async (dispatch, getState) => {
	const {authorization, user} = getState().auth;
	await fetch('https://skillshareapi.herokuapp.com/accounts/unfollow',{
			method: 'POST',
			headers: {authorization, 'Content-type': 'application/json'},
			body: JSON.stringify({
				accountID: accountID
			})
		})
	if(user){
		var updatedUser = user.following.filter(ID=>{
		return ID !== accountID;
		})
		dispatch({type: 'UNFOLLOW', payload: updatedUser})
	}
	
}

export const open = () => {
	return({type: 'OPEN'});
}
export const close = () => {
	return ({type: 'CLOSE'});
}
export const editPost = (post) => {
	return {type: 'EDIT_POST', payload: post};
}
export const fetchSubject = () => async (dispatch, getState) =>{
	const subjects = await myAPI.get('/subject')
	dispatch({type: 'FETCH_SUBJECT', payload: subjects['data']});
}