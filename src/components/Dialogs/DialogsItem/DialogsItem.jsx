import React from "react";
import {NavLink} from "react-router-dom";
import style from "./../Dialogs.module.css";

const DialogsItem = (props) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}
                     className={style.dialogs_item}
                     activeClassName={style.active_item}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;