import React from 'react';
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

export default Transactions;
