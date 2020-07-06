import React from "react";
import {connect} from "react-redux";
import {getAuth} from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {getAuth})(HeaderContainer);