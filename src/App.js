import React from 'react';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/StatisticList';
import FriendList from './components/FriendList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './components/Profile/user-data.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => {
    return (
        <>
            <Profile {...user} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
};

export default App;
