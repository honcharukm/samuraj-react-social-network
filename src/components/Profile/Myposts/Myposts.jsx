import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import renderFIeld from "../../../hoc/renderFIeld";
import {maxLength, minLength, required} from "../../../validationForm/validations";

const Myposts = (props) => {

    const postsItem = props.state.posts
        .map(post => <Post key={post.id} state={post}/>);

    const addPost = (value) => {
        props.addPost(value.postText);
    };

    return (
        <div>
            My posts
            <FormSendPost onSubmit={addPost} />
            {postsItem}
        </div>
    );
}

const TextArea = renderFIeld('textarea');
const maxLength200 = maxLength(200);
const minLength5 = minLength(5);

let FormSendPost = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='postText'
                       validate={[required, maxLength200, minLength5]}
                       component={TextArea}/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    );
}

FormSendPost = reduxForm({
    form: 'formSendPost' // a unique identifier for this form
})(FormSendPost);

export default Myposts;