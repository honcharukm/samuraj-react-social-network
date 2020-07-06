import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers, unfollow
} from "../../Redux/users-reducer";
import Loading from "../common/Loading/Loading";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangeUsers = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            { this.props.isFetching && <Loading /> }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onChangeUsers={this.onChangeUsers}
                   users={this.props.users}
                   disableButton={this.props.disableButton}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        disableButton: state.usersPage.disableButton
    }
};


export default connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow
})(UsersContainer)