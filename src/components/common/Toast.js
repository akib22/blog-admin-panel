import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Toast({ message, type = 'error', status, setStatus }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={status}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setStatus();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={type}
        >
          {message || 'Something Went wrong!'}
        </Alert>
      </Collapse>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  status: PropTypes.bool,
  setStatus: PropTypes.func,
};
