import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {SetAuthUserData} from "../../Redux/auth-reducer";
import {authThunkCreator} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authThunkCreator();
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
});

export default connect(mapStateToProps,{SetAuthUserData,authThunkCreator})(HeaderContainer);