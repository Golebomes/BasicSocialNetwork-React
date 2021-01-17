import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.ProfileWallpaper}
                     src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"></img>
            </div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );

}

export default Profile;