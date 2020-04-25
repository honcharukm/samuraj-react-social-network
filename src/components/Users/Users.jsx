import React from 'react';
import style from './Users.module.css';
import userAvatar from '../../assets/image/avatar.png';
import {NavLink} from "react-router-dom";

const Users = (props) => {

    const getPagination = () => {
        const countPage = Math.ceil(props.totalUsersCount / props.pageSize);
        const currentPage = props.currentPage;
        const pagination = [];

        for (let i = 3; i !== 0; i--) {
            let x = currentPage - i;
            if (x > 0) {
                pagination.push(x);
            }
        }

        for (let i = currentPage; i <= countPage && i <= (currentPage + 3); i++) {
            pagination.push(i);
        }
        return pagination;
    }


    return (
        <div>
            <div>
                {getPagination().map(page => {
                    const isCurrent = page === props.currentPage ? style.activePagginationItem : '';
                    return <span className={isCurrent + ' ' + style.pagginationItem}
                                 onClick={() => props.onChangeUsers(page)}>{page}</span>
                })}
            </div>
            {props.users.map(user => (<div key={user.id} className={style.item}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={style.userPhoto}
                                 src={user.photos.small != null ? user.photos.small : userAvatar} alt="ava"/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unFollowed(user.id)}>unfollow</button>
                            : <button onClick={() => props.followed(user.id)}>follow</button>}
                    </div>
                </div>
                <div className={style.userInfo}>
                    <div>{user.name}</div>
                    <div>{user.status != null ? user.status : 'no status'}</div>
                </div>
                <div>
                    <div>{'user.location.cityName'}</div>
                    <div>{'user.location.countryName'}</div>
                </div>
            </div>))}
        </div>)

}

export default Users;