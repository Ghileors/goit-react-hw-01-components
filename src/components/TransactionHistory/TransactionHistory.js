import React from 'react';
import PropTypes from 'prop-types';
import Transactions from './Transactions';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <div className={styles.container}>
            <table className={styles.transactionHistory}>
                <thead className={styles.transactionHistoryHead}>
                    <tr>
                        <th className={styles.tableHead}>Type</th>
                        <th className={styles.tableHead}>Amount</th>
                        <th className={styles.tableHead}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    <Transactions items={items} />
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;

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
