import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress, getUsersThunkCreator
} from "../../Redux/users-reducer";
import Users from "./Users";
import preloader from '../../assets/preloader_2.gif';
import style from "./users.module.css";



class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <img className={style.preloader} src={preloader}/> : null}
            <Users currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage, setTotalUsersCount,
    toggleFollowingProgress,getUsersThunkCreator
})
(UsersContainer);