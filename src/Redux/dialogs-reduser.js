const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initial = {
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
    currentMessageText: 'test'
};
const dialogsReduser = (state = initial, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                currentMessageText: action.newText
            };
        case ADD_MESSAGE:
            const newMessage = {
                id: 6,
                msg: state.currentMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                currentMessageText: ''
            };
        default:
            return state;
    }
};

export const changeMessageTextAction = (text) => ({type: CHANGE_MESSAGE_TEXT, newText: text});
export const addMessageAction = () => ({type: ADD_MESSAGE});

export default dialogsReduser;

