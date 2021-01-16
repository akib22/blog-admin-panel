import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserAvatar from './UserAvatar';

const useStyles = makeStyles({
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paper: {
    padding: 16,
  },
});

export default function BlogPost({ name, id }) {
  const classes = useStyles();

  return (
    <Paper className={`mb-10 ${classes.paper}`}>
      <UserAvatar data={{ name }} />
      <Link to={`/posts/${id}`} className={`link ${classes.postTitle}`}>
        How to test your React app.
      </Link>
      <Typography className={classes.padding}>3 comments</Typography>
    </Paper>
  );
}

BlogPost.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
