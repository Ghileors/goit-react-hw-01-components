import React from 'react';
import PropTypes from 'prop-types';
import Friends from './Friends';
import styles from './FriendsList.module.css';

const FriendList = ({ friends }) => (
    <section className={styles.section}>
        <ul className={styles.list}>
            {friends.map(friend => (
                <li key={friend.id} className={styles.item}>
                    <Friends
                        isOnline={friend.isOnline}
                        url={friend.avatar}
                        name={friend.name}
                    />
                </li>
            ))}
        </ul>
    </section>
);

FriendList.protoTypes = {
    id: PropTypes.number.isRequired,
};
export default FriendList;
