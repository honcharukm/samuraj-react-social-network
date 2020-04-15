import profileReducer from "./profile-reducer";
import dialogsReduser from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducer";

const ava = 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80';

const store = {
    _state: {
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Maksym'},
                {id: 2, name: 'Lika'},
                {id: 3, name: 'Artem'},
                {id: 4, name: 'Dima'}
            ],
            messages: [
                {id: 1, msg: 'Hi'},
                {id: 2, msg: 'How are you doing?'},
                {id: 3, msg: 'Can you help me?'},
                {id: 4, msg: 'Yo'},
                {id: 5, msg: 'Yo!!!'},
            ],
            currentMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, post: 'My first post', ava, name: "Maksym"},
                {id: 2, post: 'Hello World!', ava, name: 'Maksym'},
                {id: 3, post: 'last post in this lesson', ava, name: "Maksym"}
            ],
            currentPostText: ''
        },
        sidebar: {
            friends: [
                {id: 1, ava, name: 'Lika'},
                {id: 2, ava, name: 'Andre'},
                {id: 3, ava, name: 'Nike'}
            ]
        }
    },
    _callSubscribe() {
        console.log('work');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        this._state.dialogPage = dialogsReduser(this._state.dialogPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this.getState());
    },
};


export default store;