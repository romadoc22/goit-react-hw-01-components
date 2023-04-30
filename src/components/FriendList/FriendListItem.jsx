import PropTypes from 'prop-types';
import { Li, Status, Name } from './FriendList.styled';

export function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <Li key={id}>
      <Status isOn={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
