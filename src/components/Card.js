import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 20,
    fontWeight: '600',
  },
  padding: {
    paddingBottom: 16,
  },
});

export default function SimpleCard({ category, data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.padding}>
        <Typography variant="h1" component="h1" className={classes.title} gutterBottom>
          {data}
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          color="textSecondary"
          className={classes.category}
          gutterBottom
        >
          {category}
        </Typography>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};
