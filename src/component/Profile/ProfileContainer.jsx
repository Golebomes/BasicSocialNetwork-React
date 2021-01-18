import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile,getProfileUserThunkCreator} from "../../Redux/profile-reducer";
import {withRouter} from "react-router";
import {usersAPI} from "../../api/api";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileUserThunkCreator(this.props.match.params.userId);
    }
    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})

export default compose(
    connect(mapStateToProps,{setUserProfile,getProfileUserThunkCreator}),
    withRouter,
    withAuthRedirect)
(ProfileContainer)


