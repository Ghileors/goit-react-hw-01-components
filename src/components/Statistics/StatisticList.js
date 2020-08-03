import React from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic';
import styles from './StatisticList.module.css';

function getRandomColor() {
    let r = function () {
        return Math.floor(Math.random() * 256);
    };
    return `rgb(${r()},${r()},${r()})`;
}

const StatisticList = ({ stats }) => (
    <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
            <li
                key={id}
                className={styles.item}
                style={{ backgroundColor: getRandomColor() }}
            >
                <Statistic label={label} percentage={percentage} />
            </li>
        ))}
    </ul>
);

export default StatisticList;

StatisticList.defaultProps = {
    title: '',
};

StatisticList.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
};
