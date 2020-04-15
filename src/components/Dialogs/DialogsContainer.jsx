import React from "react";
import Dialogs from "./Dialogs";
import {addMessageAction, changeMessageTextAction} from "../../Redux/dialogs-reduser";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageAction());
        },
        changeMessage: (text) => {
            dispatch(changeMessageTextAction(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;