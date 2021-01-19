import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <div></div>
    }
    return (
        <>
        <div className={s.ProfileInf}>
            <img src = {props.profile.photos.large}/>
            <div>{`FullName: ${props.profile.fullName}`}</div>
            <div>{`Status: ${props.profile.aboutMe}`}</div>
        </div>
        <ProfileStatus status={'Salam'}/>
        </>
    )
}

export default ProfileInfo;