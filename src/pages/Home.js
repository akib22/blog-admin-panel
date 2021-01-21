import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import Card from '../components/Card';
import UsersTable from '../components/UsersTable';
import Loader from '../components/common/Loader';
import SomethingWentWrong from '../components/common/SomethingWentWrong';
import { getUsers } from '../api';

const useStyles = makeStyles({
  marginTop: {
    marginTop: 30,
  },
});

export default function Home() {
  const classes = useStyles();
  const { isLoading, data: users, isError } = useQuery('users', getUsers);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <SomethingWentWrong />;
  }

  return (
    <Container>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Card category="Users" data={users?.meta?.pagination.total} />
        <Card category="Posts" data={12321} />
        <Card category="Comments" data={12321} />
        <Card category="Reads" data={12321} />
      </Grid>
      <div className={classes.marginTop}>
        <UsersTable users={users?.data} />
      </div>
    </Container>
  );
}
