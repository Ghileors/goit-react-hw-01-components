import React from 'react';
import PropTypes from 'prop-types';

const Statistic = props => (
    <div>
        <span className="label">{props.label}</span>
        <span className="percentage">{props.percentage}</span>
    </div>
);

Statistic.defaultProps = {
    title: '',
    percentage: 20,
};

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    id: PropTypes.string,
};

export default Statistic;
