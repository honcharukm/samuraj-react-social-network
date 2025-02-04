import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER';

const initial = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: {userId, email, login} });
export const getAuth = () => (dispatch) => {
    authAPI.getMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch( setAuthUserData(id, email, login) );
            }
        });
};

export default authReducer;