import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";

const Profile = () => {
    return (
        <React.Fragment>
            <ProfileInfo/>
            <MypostsContainer />
        </React.Fragment>
    )
}

export default Profile;