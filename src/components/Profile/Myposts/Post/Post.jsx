import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={props.state.ava} alt="ava"/>
            <div>
                <h5>{props.state.name}</h5>
                <span>{props.state.post}</span>
            </div>

        </div>
    );
}

export default Post;