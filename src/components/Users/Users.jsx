import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    userPhoto: 'https://cdn.dribbble.com/users/41719/screenshots/10874748/media/7013c55784e30bf10617e994486d12d8.jpg',
                    followed: true,
                    name: 'Maksym',
                    status: 'I`m boss',
                    location: {cityName: 'Poznan', countryName: 'Polish'}
                },
                {
                    id: 2,
                    userPhoto: 'https://cdn.dribbble.com/users/41719/screenshots/10874748/media/7013c55784e30bf10617e994486d12d8.jpg',
                    followed: true,
                    name: 'Lika',
                    status: 'I`m boss',
                    location: {cityName: 'Poznan', countryName: 'Polish'}
                },
                {
                    id: 3,
                    userPhoto: 'https://cdn.dribbble.com/users/41719/screenshots/10874748/media/7013c55784e30bf10617e994486d12d8.jpg',
                    followed: false,
                    name: 'Dima',
                    status: 'I`m boss',
                    location: {cityName: 'Poznan', countryName: 'Polish'}
                },
                {
                    id: 4,
                    userPhoto: 'https://cdn.dribbble.com/users/41719/screenshots/10874748/media/7013c55784e30bf10617e994486d12d8.jpg',
                    followed: false,
                    name: 'Artem',
                    status: 'I`m boss',
                    location: {cityName: 'Poznan', countryName: 'Polish'}
                }
            ]
        );
    }

    return (
        <div>
            {props.users.map(user => (<div key={user.id} className={style.item}>
                <div>
                    <div>
                        <img className={style.userPhoto} src={user.userPhoto} alt="ava"/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unFollowed(user.id)}>unfollow</button>
                            : <button onClick={() => props.followed(user.id)}>follow</button>}
                    </div>
                </div>
                <div className={style.userInfo}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{user.location.cityName}</div>
                    <div>{user.location.countryName}</div>
                </div>
            </div>))}
        </div>)
};

export default Users;