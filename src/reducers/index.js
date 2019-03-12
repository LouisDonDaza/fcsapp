import { combineReducers } from 'redux';

const INITIAL_AUTH = {
	authorization: "",
	user: {
		following: []
	}
}
const INITIAL_SUBJECT = [
    {
        "subcategories": [],
        "imageURL": "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "bgColor": "#000",
        "_id": "5c7c21e128f9053cd845bb4f",
        "name": "Physics",
        "description": "The study of Physics",
        "code": 1,
        "subcatdesc": [],
        "__v": 0
    },
    {
        "subcategories": [
            350
        ],
        "imageURL": "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "bgColor": "#000",
        "_id": "5c7c21ed28f9053cd845bb50",
        "name": "Biology",
        "description": "The study of Biology",
        "code": 2,
        "subcatdesc": [
            {
                "_id": "5c7c64972dcb1840f87d40ee",
                "category": 350,
                "description": "The study of carbon compounds",
                "name": "Organic Chemistry"
            }
        ],
        "__v": 0
    },
    {
        "subcategories": [],
        "imageURL": "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "bgColor": "#000",
        "_id": "5c7c65a4f0eb650edc8c9694",
        "name": "Chemistry",
        "description": "The study of Chemistry",
        "code": 3,
        "subcatdesc": [],
        "__v": 0
    },
    {
        "subcategories": [],
        "imageURL": "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "bgColor": "#000",
        "_id": "5c7c69f4d1d0ac30c8f3b108",
        "name": "Math",
        "description": "The study of Math",
        "code": 4,
        "subcatdesc": [],
        "__v": 0
    },
    {
        "subcategories": [],
        "imageURL": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "bgColor": "#000",
        "_id": "5c7c6a34d1d0ac30c8f3b109",
        "name": "History",
        "description": "The study of History",
        "code": 5,
        "subcatdesc": [],
        "__v": 0
    },
    {
        "subcategories": [],
        "imageURL": "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "bgColor": "#123",
        "_id": "5c7c6ac24e12b30dd438c36a",
        "name": "Geography",
        "description": "The study of Geography",
        "code": 6,
        "subcatdesc": [],
        "__v": 0
    }
]

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
const subjectReducer = (state=INITIAL_SUBJECT, action) => {
	switch(action.type){
		case 'FETCH_SUBJECT':
			return [...action.payload];
		default:
			return state;
	}
}
export default combineReducers({
	auth: authReducer,
	feed: feedReducer,
	modal: modalReducer,
	subject: subjectReducer
})