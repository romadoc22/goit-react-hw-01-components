import PropTypes from 'prop-types';

import { Ul, Li, Status } from '../FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <Ul>
      {friends.map(friend => (
        <Li key={friend.id}>
          <Status isOn={friend.isOnline}></Status>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </Li>
      ))}
    </Ul>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
