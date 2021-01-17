import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            PostData: [
                {message: 'Hi, how are you?', numLike: 10},
                {message: 'Hi, bro?', numLike: 9},
                {message: 'Today is last day', numLike: 99},
                {message: 'Good morning!', numLike: 50}
            ],
            newPostText: '',
        },
        messagePage: {
            DialogData: [
                {name: "Bob"},
                {name: "Anna"},
                {name: "Jaina"},
                {name: "Arthas"}
            ]
            ,
            ChatData: [
                {text: "Hi"},
                {text: "How are you?"},
                {text: "Good day"},
                {text: "Coding"},
                {text: "Coding"},
                {text: "Coding"},
                {text: "Coding"}
            ],
            newMessage: ''
        }
    },
    _callsubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagePage = messageReducer(this._state.messagePage,action);
        this._callsubscriber(this._state);
    }
}

// export let addPostActionCreator = () => {
//
//     return {
//         type: ADD_POST
//     }
// }
//
// export let updateNewPostActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST,
//         text: text
//     }
// }
//
// export let sendMessageCreator = () => {
//     return {
//         type: SEND_MESSAGE
//     }
// }
//
// export let updateMessageBodyCreator = (text) => {
//     return {
//         type: UPDATE_MESSAGE_BODY,
//         text: text
//     }
// }


export default store;