import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/UsersDefaultPhoto.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={style.block}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+ u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={style.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingProgress(true);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": '2c166ae1-f751-44b5-a004-440a069db72a'
                                    }
                                })
                                    .then(response => {
                                    if(response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false);
                                })

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingProgress(true);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": '2c166ae1-f751-44b5-a004-440a069db72a'
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingProgress(false);
                                    })


                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;