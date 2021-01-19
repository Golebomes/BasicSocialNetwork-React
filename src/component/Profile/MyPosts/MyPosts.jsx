import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {

    let PostElements = props.PostData.map(p => <Post message={p.message} numlike={p.numLike}/>);

    let newPostElement = React.createRef();

    let OnAddPost = () => {
        props.OnAddPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }
    return (
        <div className={s.Posts}>
            <h1>My Posts</h1>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={OnAddPost}>Add post</button>
                {/*<button>Delete post</button>*/}
            </div>
            <div className={s.PostArea}>
                {PostElements}
            </div>
        </div>
    );

}

export default MyPosts;