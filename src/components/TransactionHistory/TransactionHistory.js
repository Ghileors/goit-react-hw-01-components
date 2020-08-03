import React from 'react';
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
                <Transactions items={items} />
            </tbody>
        </table>
    </>
);

export default TransactionHistory;
