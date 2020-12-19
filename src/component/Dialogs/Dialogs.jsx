import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateMessageBodyCreator} from "../../Redux/message-reducer";

const DialogItem = (props) => {
    return (
        <div className={s.DialogItem}>
            <NavLink to={"/messages/" + props.name}>{props.name}</NavLink>
        </div>
    )
}

const Chat = (props) => {
    return (
        <div className={s.Chat}>
            {props.text}
        </div>
    )
}


const Dialogs = (props) => {

    let DialogElements = props.DialogData.map(dialog => <DialogItem name={dialog.name}/>);
    let ChatElements = props.ChatData.map(c => <Chat text={c.text}/>);
    let newSendElement = React.createRef();

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageBodyCreator(text));
    }

    let Send =() => {
        props.dispatch(sendMessageCreator());
    }
    return (

        <div className={s.Dialogs}>
            <div className={s.DialogItems}>
                {DialogElements}
            </div>
            <div className={s.Chats}>
                {ChatElements}
                <textarea onChange={onMessageChange}  value={props.newMessage} ></textarea>
                <button onClick={Send}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs;