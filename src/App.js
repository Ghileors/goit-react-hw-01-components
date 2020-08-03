import React from 'react';

import Container from './components/Container/Container';
// import Profile from './components/Profile/Profile';
// import Statistic from './components/Statistics/Statistic';
import Section from './components/Statistics/Section';
import StatisticList from './components/Statistics/StatisticList';
// import FriendList from './components/FriendList/FriendsList';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';

// import user from './components/Profile/user-data.json';
import statisticalData from './components/Statistics/statistical-data.json';
// import friends from './components/FriendList/friends.json';
// import transactions from './components/TransactionHistory/transactions.json';

const App = () => {
    return (
        <Container>
            {/* <Profile {...user} /> */}
            <Section title="Upload stats">
                <StatisticList stats={statisticalData} />
            </Section>
            {/* <FriendList friends={friends} />
            <TransactionHistory items={transactions} /> */}
        </Container>
    );
};

export default App;
