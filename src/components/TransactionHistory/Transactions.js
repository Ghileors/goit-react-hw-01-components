import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transactions = ({ items }) => {
    return (
        <>
            {items.map(item => (
                <tr key={item.id} className={styles.tableRow}>
                    <td className={styles.type}>{item.type}</td>
                    <td className={styles.amount}>{item.amount}</td>
                    <td className={styles.currency}>{item.currency}</td>
                </tr>
            ))}
        </>
    );
};

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default Transactions;
