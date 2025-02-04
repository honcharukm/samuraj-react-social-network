import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReduser from "./dialogs-reduser";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

const reducers = combineReducers({
    dialogPage: dialogsReduser,
    profilePage: profileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;