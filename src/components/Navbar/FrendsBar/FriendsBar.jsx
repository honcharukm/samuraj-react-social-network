import React from 'react';
import style from './FriendsBar.module.css';

const FriendItem = (props) => {
    return (
        <div className={style.item_friend}>
            <img src={props.state.ava} alt="ava"/>
            <span>{props.state.name}</span>
        </div>
    );
};

const FriendsBar = (props) => {
    const state = props.store.getState().sidebar.friends;
    const friendsItem = state.map(friend => <FriendItem key={friend.id} state={friend} />);
    return (
        <React.Fragment>
            <h3>Friends</h3>
            <div className={style.items_container}>
                {friendsItem}
            </div>
        </React.Fragment>
    );
};

export default FriendsBar;