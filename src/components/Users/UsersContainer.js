import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    changeCurrentPage,
    followed,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollowed
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Loading from "../common/Loading/Loading";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onChangeUsers = (pageNumber) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });

        this.props.changeCurrentPage(pageNumber);
    };

    render() {
        return <>
            { this.props.isFetching && <Loading /> }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onChangeUsers={this.onChangeUsers}
                   users={this.props.users}
                   unFollowed={this.props.unFollowed}
                   followed={this.props.followed}
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
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps, {
    setUsers,
    followed,
    unFollowed,
    setTotalUsersCount,
    changeCurrentPage,
    toggleIsFetching
})(UsersContainer)