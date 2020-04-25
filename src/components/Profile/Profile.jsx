import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";

const Profile = (props) => {
    return (
        <React.Fragment>
            <ProfileInfo profile={props.profile} />
            <MypostsContainer />
        </React.Fragment>
    )
}

export default Profile;