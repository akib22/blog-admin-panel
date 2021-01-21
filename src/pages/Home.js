import { useState } from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
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
  const [page, setPage] = useState(1);
  const { isLoading, data: users, isError } = useQuery(['users', page], () => getUsers(page), {
    keepPreviousData: true,
  });

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
      <div className="flex items-center justify-between mb-10">
        <Typography>
          Page <strong>{page}</strong> of <strong>{users.meta.pagination.pages}</strong>
        </Typography>
        <div>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: '8px' }}
            disabled={page === 1}
            onClick={() => setPage((page) => page - 1)}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={page === users.meta.pagination.pages}
            onClick={() => setPage((page) => page + 1)}
          >
            next
          </Button>
        </div>
      </div>
    </Container>
  );
}
