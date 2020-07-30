import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticList.module.css';

function getRandomColor() {
    let r = function () {
        return Math.floor(Math.random() * 256);
    };
    return `rgb(${r()},${r()},${r()})`;
}

const StatisticList = ({ stats }) => {
    return (
        <ul className={styles.statList}>
            {stats.map(stat => (
                <li
                    key={stat.id}
                    className={styles.item}
                    style={{ backgroundColor: getRandomColor() }}
                >
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>
                        {stat.percentage}%
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default StatisticList;

StatisticList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
