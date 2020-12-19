import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.avatar} src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"></img>
            <div className={s.text}>
            <div className={s.textPost}>{props.message}</div>
            <div>
                <span>like {props.numlike}</span>
            </div>
                </div>
        </div>
    );

}

export default Post;