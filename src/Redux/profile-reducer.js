import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const ava = 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80';

const initial = {
    posts: [
        {id: 1, post: 'My first post', ava, name: "Maksym"},
        {id: 2, post: 'Hello World!', ava, name: 'Maksym'},
        {id: 3, post: 'last post in this lesson', ava, name: "Maksym"}
    ],
    profile: null,
    status: ''
};
const profileReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                post: action.currentPostText,
                ava: 'img',
                name: 'Maksym'
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...action.profile}
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPost = (currentPostText) => ({type: ADD_POST, currentPostText});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getProfile = (userID) => (dispatch) => {
    profileAPI.getProfile(userID)
        .then(data => dispatch( setUserProfile(data) ));
}
export const getStatus = (userID) => (dispatch) => {
    profileAPI.getUserStatus(userID)
        .then(status => dispatch( setUserStatus(status) ))
}
export const changeStatus = (status) => (dispatch) => {
    profileAPI.changeStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch( setUserStatus(status) );
            }
        })
}

export default profileReducer;