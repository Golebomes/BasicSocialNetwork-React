import {usersAPI} from "../api/api";
import {toggleFollowingProgress, unfollow} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    PostData: [
        {message: 'Hi, how are you?', numLike: 10},
        {message: 'Hi, bro?', numLike: 9},
        {message: 'Today is last day', numLike: 99},
        {message: 'Good morning!', numLike: 50}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                numLike: 0
            }
            let stateCopy = {...state};
            stateCopy.PostData = [...state.PostData];
            stateCopy.PostData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
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
export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export let updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        text: text
    }
}

export const getProfileUserThunkCreator = (userId) => {
    return (dispatch) => {
        //let userId = userId;
        if (!userId) {
            userId = 2;
        }

        usersAPI.getProfileUser(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export default profileReducer;