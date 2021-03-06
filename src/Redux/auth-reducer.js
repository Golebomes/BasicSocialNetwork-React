import {usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...state.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const SetAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data:{userId,email,login}});

export const authThunkCreator = () => {
    return (dispatch) => {
        usersAPI.auth()
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id,login,email} = response.data.data;
                    dispatch(SetAuthUserData(id,email,login));
                }
            });
    }
}

export default authReducer;