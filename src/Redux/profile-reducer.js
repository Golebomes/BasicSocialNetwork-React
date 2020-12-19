const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state,action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                numLike: 0
            }
            state.PostData.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST: {
            state.newPostText = action.text;
            return state;
        }
        default:
            return state;
    }
}

export let addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export let updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        text: text
    }
}

export default profileReducer;