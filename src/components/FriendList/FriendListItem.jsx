import friends from 'parts/friends.json';

export const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status">{friend.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
