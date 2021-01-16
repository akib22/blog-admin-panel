import PropTypes from 'prop-types';
import { Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  comment: {
    border: '1px solid #eee',
    padding: 15,
    width: '100%',
    borderRadius: 5,
  },
});

export default function Comment({ comment }) {
  const classes = useStyles();

  return (
    <div className="flex mb-10">
      <Avatar className="mr-8" />
      <Typography className={classes.comment}>{comment}</Typography>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
};
