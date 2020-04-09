import React from "react";
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button>send</button>
            </div>
            <Post message={'Hello'} />
            <Post message={'It\'s my first post'}/>
        </div>
    );
}

export default Myposts;