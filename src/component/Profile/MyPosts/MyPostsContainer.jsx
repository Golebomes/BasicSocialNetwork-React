import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import store from "../../../Redux/redux-store";
import {connect} from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
//import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import Dialogs from "../../Dialogs/Dialogs";


// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     let AddPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     let onPostChange = (text) => {
//                         let action = updateNewPostActionCreator(text);
//                         store.dispatch(action);
//                     }
//                     return <MyPosts onPostchange={onPostChange} OnAddPost={AddPost}
//                                     PostData={state.profilePage.PostData}
//                                     newPostText={state.profilePage.newPostText}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
// };

let mapStateToProps = (state) => {
    return {
        PostData: state.profilePage.PostData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
        ,
        OnAddPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


