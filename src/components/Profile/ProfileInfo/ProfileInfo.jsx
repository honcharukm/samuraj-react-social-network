import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={style.profile_wallpaper}
                 src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg"
                 alt="header user image"/>
            <div className={style.profile_info}>
                <img className={style.avatar} src={props.profile.photos.small || "https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"} alt="avatar"/>
                <div className={style.info}>
                    <h3>{props.profile.fullName}</h3>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;