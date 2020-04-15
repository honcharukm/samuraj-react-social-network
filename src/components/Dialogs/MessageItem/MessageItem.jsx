import React from "react";
import style from "../Dialogs.module.css";

const MessageItem = (props) => {
    let classes = style.dialog_message + ' ' + (props.state.id % 2 ? style.dialogs_item_you : '');
    return (
        <div className={classes}>{props.state.msg}</div>
    );
};

export default MessageItem;