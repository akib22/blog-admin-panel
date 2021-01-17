import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@material-ui/core';

export default function UserAvatar({ data }) {
  return (
    <Link className="flex items-center link" to={`/users/${data.id}`}>
      <Avatar className="mr-8" src="" alt="user-avatar" />
      <Typography>{data.name}</Typography>
    </Link>
  );
}

UserAvatar.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
