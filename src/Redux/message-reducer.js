const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';


const messageReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newBody = {
                text: state.newMessage
            }
            state.ChatData.push(newBody);
            state.newMessage = '';
        }
        case UPDATE_MESSAGE_BODY: {
            state.newMessage = action.text;
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