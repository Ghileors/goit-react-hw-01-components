import React from 'react';
import PropTypes from 'prop-types';
import Friends from './Friends';
import defaultImg from './default-img.png';
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

Friends.defaultProps = {
    url: defaultImg,
    name: 'Anonymous',
};
FriendList.protoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
export default FriendList;
