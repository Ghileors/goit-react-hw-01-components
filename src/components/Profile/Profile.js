import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../default-img.png';

const Profile = props => (
    <div className="profile">
        <div className="description">
            <img src={props.avatar} alt="props avatar" className="avatar" />
            <p className="name">{props.name}</p>
            {props.tag && <p className="tag">{`@${props.tag}`}</p>}
            <p className="location">{props.location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{props.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{props.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{props.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: defaultImg,
    name: 'Anonymous',
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

export default Profile;
