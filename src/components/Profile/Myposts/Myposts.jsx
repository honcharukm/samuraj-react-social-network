import React from "react";
import Post from "./Post/Post";

const Myposts = (props) => {

    const postsItem = props.state.posts
        .map(post => <Post key={post.id} state={post}/>);

    const postTextArea = React.createRef();

    const addPost = () => {
        props.onAddPost();
    };
    const onChangeTextArea = () => {
        props.onChangeText(postTextArea.current.value);
    };

    return (
        <div>
            My posts
            <div>
                <textarea ref={postTextArea}
                          value={props.state.currentPostText}
                          onChange={onChangeTextArea}/>
                <button onClick={addPost}>send</button>
            </div>
            {postsItem}
        </div>
    );
}

export default Myposts;