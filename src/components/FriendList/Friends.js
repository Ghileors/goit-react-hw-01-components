import React from 'react';
import styles from './FriendsList.module.css';

const Friends = props => (
    <div className={styles.itemContainer}>
        <span
            className={
                props.isOnline ? styles.statusOnline : styles.statusOffline
            }
        ></span>
        <img
            className={styles.avatar}
            src={props.url}
            alt={props.name}
            width="48"
        />
        <p className={styles.name}>{props.name}</p>
    </div>
);

export default Friends;
