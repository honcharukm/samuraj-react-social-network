import React from "react";
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import SendMessageInput from "./SendMessageInput/SendMessageInput";

const Dialogs = (props) => {
    let dialogsItem = props.state.dialogs
        .map( dialog => <DialogsItem key={ dialog.id } id={ dialog.id } name={ dialog.name }/> );

    let messagesItem = props.state.messages
        .map( message => <MessageItem key={ message.id } state={ message }/> );

    return (
        <div className={ style.dialogs_wrap }>
            <div className={ style.dialogs }>
                <h3>Dialogs</h3>
                { dialogsItem }
            </div>
            <div className={style.dialog}>
                { messagesItem }
                <SendMessageInput currentMessageText={ props.state.currentMessageText }
                                  changeMessage={ props.changeMessage }
                                  sendMessage={ props.sendMessage }
                />
            </div>
        </div>
    );
};

export default Dialogs;