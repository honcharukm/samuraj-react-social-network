import React from "react";
import {addPostAction, changePostTextAction} from "../../../Redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    state: state.profilePage
});
const mapDispatchToProps = (dispatch) => ({
    onAddPost: () => {
        dispatch(addPostAction());
    },
    onChangeText: (text) => {
        dispatch(changePostTextAction(text));
    }
});

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;