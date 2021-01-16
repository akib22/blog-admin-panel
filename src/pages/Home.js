import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import UsersTable from '../components/UsersTable';

const useStyles = makeStyles({
  marginTop: {
    marginTop: 30,
  },
});

export default function CreatePost() {
  const classes = useStyles(0);
  return (
    <>
      <Navbar />
      <Container>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Card category="Users" data={12321} />
          <Card category="Posts" data={12321} />
          <Card category="Comments" data={12321} />
          <Card category="Reads" data={12321} />
        </Grid>
        <div className={classes.marginTop}>
          <UsersTable />
        </div>
      </Container>
    </>
  );
}
