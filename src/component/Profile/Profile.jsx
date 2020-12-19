import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {


    return (
        <div className={p.content}>
            <div>
                <img className={p.ProfileWallpaper}
                     src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"></img>
            </div>
            <ProfileInfo/>
            <MyPosts PostData={props.PostData}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    );

}

export default Profile;