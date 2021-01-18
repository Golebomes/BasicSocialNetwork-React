import React from 'react';
import {sendMessageCreator, updateMessageBodyCreator} from "../../Redux/message-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
//import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     let onMessageChange = (text) => {
//                         store.dispatch(updateMessageBodyCreator(text));
//                     }
//
//                     let Send = () => {
//                         store.dispatch(sendMessageCreator());
//                     }
//                     return <Dialogs Send={Send} onMessageChange={onMessageChange}
//                                     DialogData={state.messagePage.DialogData}
//                                     ChatData={state.messagePage.ChatData}
//                                     newMessage={state.messagePage.newMessage}
//
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        DialogData: state.messagePage.DialogData,
        ChatData: state.messagePage.ChatData,
        newMessage: state.messagePage.newMessage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Send: () => {dispatch(sendMessageCreator());},
        onMessageChange: (text) => {dispatch(updateMessageBodyCreator(text));}
    }
}

let withAuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirectComponent);


export default DialogsContainer;