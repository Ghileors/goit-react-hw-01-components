import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticList.module.css';

const Statistic = ({ title, children }) => {
    return (
        <section className={styles.statistics}>
            {title ? <h2 className={styles.title}>{title}</h2> : null}
            {children}
        </section>
    );
};

Statistic.propTypes = {
    title: PropTypes.string,
};

export default Statistic;
