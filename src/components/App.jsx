import user from 'parts/user.json';
import data from 'parts/data.json';
import friends from 'parts/friends.json';
import transactions from 'parts/transactions.json';
import { Profile } from 'components/Profile/profile';
import { Statistics } from 'components/Statistics/statistics';
import { FriendList } from 'components/FriendList/FriendListI';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'block',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
