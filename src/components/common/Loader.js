import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  top: {
    color: '#1a90ff',
    animationDuration: '550ms',
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className="w-100 h-100 flex justify-center items-center">
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={60}
        thickness={5}
      />
    </div>
  );
}
