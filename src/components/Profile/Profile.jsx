import React from "react";
import style from "./Profile.module.css";
import Myposts from "./Myposts/Myposts";

const Profile = () => {
    return (
        <React.Fragment>
            <img className={style.headerUserImage}
                 src="https://lh3.googleusercontent.com/proxy/VNZuPFw5gY9xK2KOTnZj_oN1MfpJvdYahQkgEIbJyNk2rpi2Xp9tLJaZeLDWblCiWaKRqbT6CjTejCGyrMww2Ds0Xq2mupCmncby9Z2JsnaVtXrXMN3FBJFwpmgsTCH8Yxrc0hY"
                 alt="header user image"/>
            <div>
                ava + description
            </div>
            <Myposts/>
        </React.Fragment>
    )
}

export default Profile;