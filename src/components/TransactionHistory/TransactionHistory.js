import React from 'react';
import PropTypes from 'prop-types';
import Transactions from './Transactions';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <>
        <table className={styles.transactionHistory}>
            <thead className={styles.transactionHistoryHead}>
                <tr>
                    <th className={styles.tableHead}>Type</th>
                    <th className={styles.tableHead}>Amount</th>
                    <th className={styles.tableHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={styles.tableRow}>
                        <Transactions
                            items={items}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);

Transactions.propTypes = {
    id: PropTypes.string.isRequired,
};
export default TransactionHistory;
