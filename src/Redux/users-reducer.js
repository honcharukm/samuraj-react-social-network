const UN_FOLLOWED = 'UN-FOLLOWED';
const FOLLOWED = 'FOLLOWED';
const SET_USERS = 'SET-USERS';

const initial = {
    users: []
};

const usersReducer = (state = initial, action) => {
    switch (action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: [...state.users.map( user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                } )]
            };
        case UN_FOLLOWED:
            return {
                ...state,
                users: [...state.users.map( user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                } )]
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
}

export const unFollowedAC = (userId) => ({type: UN_FOLLOWED, userId});
export const followedAC = (userId) => ({type: FOLLOWED, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;