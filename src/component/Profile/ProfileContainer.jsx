import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile,getProfileUserThunkCreator} from "../../Redux/profile-reducer";
import {withRouter} from "react-router";
import {usersAPI} from "../../api/api";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = 2;
        // }
        //
        // usersAPI.getProfileUser(userId).then(response => {
        //     this.props.setUserProfile(response.data);
        // })
        this.props.getProfileUserThunkCreator(this.props.match.params.userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}


let withAuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})

const WithUrlDataContainerComponent = withRouter(withAuthRedirectComponent);

export default connect(mapStateToProps,{setUserProfile,getProfileUserThunkCreator})(WithUrlDataContainerComponent);