import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ stats }) => (
    <section className="statistics">
        <h2 className="title">{stats.title}</h2>

        <ul className="stat-list">
            {stats.map(stat => (
                <li key={stat.id} className="item">
                    <Statistic
                        label={stat.label}
                        percentage={`${stat.percentage}%`}
                    />
                </li>
            ))}
        </ul>
    </section>
);

export default Statistics;
