import user from 'parts/user.json';
import css from 'components/Profile/profile.module.css';
import PropTypes from 'prop-types';

export const Profile = () => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img
          src={user.avatar}
          alt="User avatar"
          className={css.avatar}
          width="200px"
        />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  label: PropTypes.number,
  quantity: PropTypes.number,
};
