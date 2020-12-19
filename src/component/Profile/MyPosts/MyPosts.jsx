import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {

    let PostElements = props.PostData.map(p => <Post message={p.message} numlike={p.numLike}/>);

    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }
    return (
        <div className={s.Posts}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={AddPost}>Add post</button>
                <button>Delete post</button>
            </div>
            <div className={s.PostArea}>
                {PostElements}
            </div>
        </div>
    );

}

export default MyPosts;