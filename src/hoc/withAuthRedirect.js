import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mstp = (state) => ({
    isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {
    class WARComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login' />;
            return <Component {...this.props}/>
        }
    }

    return connect(mstp)(WARComponent);
};

export default withAuthRedirect;