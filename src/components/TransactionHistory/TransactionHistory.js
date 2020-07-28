import React from 'react';
import PropTypes from 'prop-types';
import Transactions from './Transactions';

const TransactionHistory = ({ items }) => {
    return (
        <table className="">
            <thead className="">
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <Transactions items={items} />
            </tbody>
        </table>
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
