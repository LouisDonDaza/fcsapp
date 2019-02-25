import { combineReducers } from 'redux';

const INITIAL_AUTH = {
	authorization: "",
	user: {
		following: []
	}
}
const INITIAL_SETTINGS = {
	Work: [
		{
			color: 'green',
			key: 'done',
			value: 0,
			text: 'Done'
		},
		{
			color: 'pink',
			key: 'new',
			value: 1,
			text: 'New'
		},
		{
			color: 'olive',
			key: 'important',
			value: 2,
			text: 'Important'
		},
		{
			color: 'yellow',
			key: 'Upcoming Deadline',
			value: 3,
			text: 'Upcoming Deadline'
		},
		{
			color: 'red',
			key: 'overdue',
			value: 4,
			text: 'Overdue'
		}
	],
	Community: [
		{
			color: 'green',
			key: 'Garden',
			value: 0,
			text: 'Garden'
		},
		{
			color: 'pink',
			key: 'Arts & Craft',
			value: 1,
			text: 'Arts & Craft'
		},
		{
			color: 'olive',
			key: 'Logistics',
			value: 2,
			text: 'Logistics'
		},
		{
			color: 'yellow',
			key: 'Community Service',
			value: 3,
			text: 'Community Service'
		},
		{
			color: 'red',
			key: 'Cafeteria',
			value: 4,
			text: 'Cafeteria'
		}
	],
	HighSchool:[
		{
			color: 'green',
			key: 'maths',
			value: 0,
			text: 'Maths'
		},
		{
			color: 'pink',
			key: 'history',
			value: 1,
			text: 'History'
		},
		{
			color: 'olive',
			key: 'science',
			value: 2,
			text: 'Science'
		},
		{
			color: 'yellow',
			key: 'english',
			value: 3,
			text: 'English'
		},
		{
			color: 'red',
			key: 'physical education',
			value: 4,
			text: 'Physical Education'
		}
	],
	College:[
		{
			color: 'green',
			key: 'calculus',
			value: 0,
			text: 'Calculus'
		},
		{
			color: 'pink',
			key: 'history',
			value: 1,
			text: 'History'
		},
		{
			color: 'olive',
			key: 'physics',
			value: 2,
			text: 'Physics'
		},
		{
			color: 'yellow',
			key: 'english',
			value: 3,
			text: 'English'
		},
		{
			color: 'red',
			key: 'chemistry',
			value: 4,
			text: 'Chemistry'
		}
	]
}
const INITIAL_MODAL = {
	open: false,
	edit: false,
	values: {}
}
const authReducer = (state=INITIAL_AUTH, action)=> {
	switch(action.type){
		case 'TOKEN':
			return {...state, authorization: action.payload};
		case 'USER_INFO':
			return {...state, user: action.payload};
		case 'SIGN_OUT':
			return {...state, authorization: "", user: {}};
		case 'FOLLOW':
			return {...state, user: action.payload};
		case 'UNFOLLOW':
			return {...state, user: action.payload};
		default:
			return state;
	}
}
const feedReducer = (state = [], action) => {
	switch(action.type){
		case 'FETCH_FEED':
			return [...action.payload];
		default:
			return state;
	}
}
const settingsReducer = (state=INITIAL_SETTINGS, action)=>{
	switch(action.type){
		case 'DUMMY':
			return action.payload;
		default:
			return state;
	}
}
const modalReducer = (state=INITIAL_MODAL, action) =>{
	switch(action.type){
		case 'OPEN':
			return {...state, open: true};
		case 'CLOSE':
			return {...state, open: false, edit: false, values: {}};
		case 'EDIT_POST':
			return {...state, open:true, edit: true, values: action.payload};
		default:
			return state;
	}
}
export default combineReducers({
	auth: authReducer,
	feed: feedReducer,
	settings: settingsReducer,
	modal: modalReducer
})