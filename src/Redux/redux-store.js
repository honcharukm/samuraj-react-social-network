import {combineReducers, createStore} from "redux";
import dialogsReduser from "./dialogs-reduser";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    dialogPage: dialogsReduser,
    profilePage: profileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});
const store = createStore(reducers);

export default store;