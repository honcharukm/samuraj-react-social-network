import {connect} from "react-redux";
import Users from "./Users";
import {followedAC, setUsersAC, unFollowedAC} from "../../Redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        followed: (userId) => dispatch(followedAC(userId)),
        unFollowed: (userId) => dispatch(unFollowedAC(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)