import {getAuth} from "./auth-reducer";

const INITIALIZE_APP = 'INITIALIZE_APP';

const initial = {
    initialized: false
};
const appReducer = (state = initial, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializeApp = () => ({type: INITIALIZE_APP});

export const init = () => (dispatch) => {
    let resultAuth = dispatch(getAuth);

    Promise.all([resultAuth])
        .then(() => dispatch(initializeApp()));
};

export default appReducer;