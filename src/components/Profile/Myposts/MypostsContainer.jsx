import React from "react";
import {addPost} from "../../../Redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    state: state.profilePage
});

const MypostsContainer = connect(mapStateToProps, {addPost})(Myposts);

export default MypostsContainer;