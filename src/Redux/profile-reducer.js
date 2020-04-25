const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const ava = 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80';

const initial = {
    posts: [
        {id: 1, post: 'My first post', ava, name: "Maksym"},
        {id: 2, post: 'Hello World!', ava, name: 'Maksym'},
        {id: 3, post: 'last post in this lesson', ava, name: "Maksym"}
    ],
    currentPostText: '',
    profile: null
};
const profileReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                post: state.currentPostText,
                ava: 'img',
                name: 'Maksym'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                currentPostText: ''
            };
        case CHANGE_POST_TEXT:
            return {
                ...state,
                currentPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...action.profile}
            };
        default:
            return state;
    }
};

export const addPostAction = () => ({type: ADD_POST});
export const changePostTextAction = (text) => ({type: CHANGE_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;