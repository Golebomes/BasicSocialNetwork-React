const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';


let initialState = {
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

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newBody = {
                text: state.newMessage
            }
            let stateCopy = {...state};
            stateCopy.ChatData = [...state.ChatData];
            stateCopy.ChatData.push(newBody);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export let sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export let updateMessageBodyCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_BODY,
        text: text
    }
}

export default messageReducer;