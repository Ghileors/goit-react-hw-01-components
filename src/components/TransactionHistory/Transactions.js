import React from 'react';

const Transactions = ({ items }) => {
    return (
        <>
            {items.map(item => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
        </>
    );
};

export default Transactions;
