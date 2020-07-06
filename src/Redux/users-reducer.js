import {followAPI, usersAPI} from "../api/api";
import React from "react";

const UN_FOLLOWED = 'UN-FOLLOWED';
const FOLLOWED = 'FOLLOWED';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const PUSH_DISABLE_BUTTON = 'PUSH_DISABLE_BUTTON';
const UN_DISABLE_BUTTON = 'UN_DISABLE_BUTTON';

const initial = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disableButton: []
};

const usersReducer = (state = initial, action) => {
    switch (action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })]
            };
        case UN_FOLLOWED:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })]
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.toggle
            };
        case PUSH_DISABLE_BUTTON:
            return {
                ...state,
                disableButton: [...state.disableButton, action.id]
            };
        case UN_DISABLE_BUTTON:
            return {
                ...state,
                disableButton: [state.disableButton.filter(userId => userId !== action.id)]
            };
        default:
            return state;
    }
}

export const unFollowed = (userId) => ({type: UN_FOLLOWED, userId});
export const followed = (userId) => ({type: FOLLOWED, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const changeCurrentPage = (pageNumber) => ({type: CHANGE_CURRENT_PAGE, pageNumber});
export const toggleIsFetching = (toggle) => ({type: TOGGLE_IS_FETCHING, toggle});
export const disableButton = (id) => ({type: PUSH_DISABLE_BUTTON, id});
export const unDisableButton = (id) => ({type: UN_DISABLE_BUTTON, id});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    dispatch(changeCurrentPage(currentPage));
};

export const follow = (userID) => (dispatch) => {
    dispatch(disableButton(userID));
    followAPI.follow(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followed(userID));
            }
            dispatch(unDisableButton(userID));
        });
};

export const unfollow = (userID) => (dispatch) => {
    dispatch(disableButton(userID));
    followAPI.unfollow(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowed(userID));
            }
            dispatch(unDisableButton(userID));
        });
};


export default usersReducer;