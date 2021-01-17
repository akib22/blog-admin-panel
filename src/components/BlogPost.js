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

export default function BlogPost({ name, id, post }) {
  const classes = useStyles();

  return (
    <Paper className={`mb-10 ${classes.paper}`}>
      <UserAvatar data={{ name, id }} />
      <Link to={`/${id}/posts/${post.id}`} className={`link ${classes.postTitle}`}>
        {post.title}
      </Link>
      <Typography className={classes.padding}>3 comments</Typography>
    </Paper>
  );
}

BlogPost.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
