import { Container, CardContent, Card, Avatar, Grid, Typography, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useQueries } from 'react-query';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import BlogPost from '../components/BlogPost';
import Loader from '../components/common/Loader';
import SomethingWentWrong from '../components/common/SomethingWentWrong';
import { getUser, getPosts } from '../api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  banner: {
    background: 'cyan',
    height: 150,
    width: '100%',
    zIndex: -1,
  },
  infoCard: {
    marginTop: -40,
    textAlign: 'center',
    paddingTop: 40,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    position: 'absolute',
    top: 110,
    left: '46%',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    borderBottom: '1px solid #eee',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  normalText: {
    fontSize: 14,
  },
  text: {
    fontWeight: '700',
  },
  card: {
    padding: 15,
  },
  move: {
    marginTop: -25,
  },
}));

export default function User() {
  const classes = useStyles();
  const { userId } = useParams();
  const [user, posts] = useQueries([
    { queryKey: ['user', userId], queryFn: () => getUser(userId) },
    { queryKey: ['posts', userId], queryFn: () => getPosts(userId) },
  ]);

  if (user.isLoading || posts.isLoading) {
    return <Loader />;
  }

  if (user.isError || posts.isLoading) {
    return <SomethingWentWrong />;
  }

  if (user.data.code === 404) {
    return (
      <div className="w-100 h-80 flex justify-center items-center">
        <Typography variant="h5">{user.data.data.message}</Typography>
      </div>
    );
  }

  return (
    <div className={classes.move}>
      <div className="mb-40">
        <div className={classes.banner} />
        <Container>
          <Avatar className={classes.large} />
          <Card className={classes.infoCard}>
            <CardContent>
              <Typography className={classes.username}>{user.data.data.name}</Typography>
              <Typography>{user.data.data.email}</Typography>
              <div className="mt-8 flex justify-center align-center">
                <GithubIcon />
                <TwitterIcon style={{ margin: '0 10px' }} />
                <FacebookIcon />
              </div>
            </CardContent>
          </Card>
        </Container>
      </div>
      <Container>
        {/* Info about user */}
        <Grid container spacing={3}>
          <Grid item xs={4} sm={4}>
            <Paper className={`mb-10 ${classes.card}`}>
              <Typography className={classes.title}>Skills</Typography>
              <Typography className={classes.normalText}>
                PHP, Java, Python, SQL, MySQL, HTML, CSS, JS, WordPress, Symfony, Silex, Jenkins,
                Git, Ubuntu, Shell, Scripting, Interfaces, Azure, SSO, ETL
              </Typography>
            </Paper>
            <Paper className={classes.card}>
              <Typography className={classes.text}>{posts.data?.data.length || 0} posts</Typography>
              <Typography className={classes.text}>5 comments</Typography>
            </Paper>
          </Grid>

          {/* Post List */}
          {posts.data.data.length > 0 ? (
            <Grid item xs={10} sm={8}>
              {posts.data.data.map((post) => (
                <BlogPost
                  key={post.id}
                  className={classes.paper}
                  name={user.data.data.name}
                  id={user.data.data.id}
                  post={post}
                />
              ))}
            </Grid>
          ) : (
            <Grid item xs={10} sm={8}>
              <Typography variant="h4">No posts Found!</Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}
