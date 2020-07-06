import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
        this.defaultImage = 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80';
        this.state = {
            redactStatus: false,
            status: this.props.status || 'no status'
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    toggleInput = () => {
        if(this.state.redactStatus) {
            const status = this.state.status;
            this.props.changeStatus(status);
        }

        this.setState({
            redactStatus: !this.state.redactStatus
        });
    }

    changeInput = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className={style.profile_info}>
                    <img className={style.avatar} src={this.props.profile.photos.small || this.defaultImage} alt="avatar"/>
                    <div className={style.info}>
                        <h3>{this.props.profile.fullName}</h3>
                        <p>{this.props.profile.aboutMe}</p>
                    </div>
                </div>
                {this.state.redactStatus
                    ? <input autoFocus
                             onBlur={this.toggleInput}
                             value={this.state.status} onChange={this.changeInput} />
                    : <div onClick={this.toggleInput} >{this.state.status}</div>}
            </div>
        );
    }
};

export default ProfileInfo;