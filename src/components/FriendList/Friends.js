import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../default-img.png';

const Friends = props => (
    <div>
        <span className="status">{props.isOnline}</span>
        <img className="avatar" src={props.url} alt={props.name} width="48" />
        <p className="name">{props.name}</p>
    </div>
);

Friends.defaultProps = {
    url: defaultImg,
    name: 'Anonymous',
};

Friends.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};

export default Friends;
