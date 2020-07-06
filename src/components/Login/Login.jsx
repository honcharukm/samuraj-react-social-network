import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../validationForm/validations";
import renderFIeld from "../../hoc/renderFIeld";

const Login = () => {
    const onsubmit = (value) => {
        console.log(value);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onsubmit}/>
        </div>
    )
};

const maxLength15 = maxLength(15);
const minLength3 = minLength(3);
const Input = renderFIeld('input');

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='login'
                       validate={[required, maxLength15, minLength3]}
                       component={Input}
                       type='text'
                       placeholder='Type your login' />
            </div>
            <div>
                <Field name='password'
                       validate={[required, maxLength15, minLength3]}
                       component={Input}
                       type='password'
                       placeholder='Type your password' />
            </div>
            <div>
                <Field name='remember' component='input' type='checkbox' /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};
LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default Login;