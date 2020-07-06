import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {changeStatus, getProfile, getStatus} from "../../Redux/profile-reducer";
import Loading from "../common/Loading/Loading";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userID = this.props.match.params.userId || 7452;
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    render() {
        if (!this.props.profile) {
            return <Loading />
        }
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, changeStatus}),
    withRouter
)(ProfileContainer);

