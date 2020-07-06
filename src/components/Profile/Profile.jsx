import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";

const Profile = (props) => {
    return (
        <React.Fragment>
            <ProfileInfo profile={props.profile} status={props.status} changeStatus={props.changeStatus} />
            <MypostsContainer />
        </React.Fragment>
    )
}

export default Profile;