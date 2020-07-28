import React from 'react';
import Friends from './Friends';

const FriendList = ({ friends }) => (
    <ul>
        {friends.map(friend => (
            <li key={friend.id} className="item">
                <Friends
                    isOnline={friend.isOnline}
                    url={friend.avatar}
                    name={friend.name}
                />
            </li>
        ))}
    </ul>
);

export default FriendList;
