import { Container, CardContent, Card, Avatar, Grid, Typography, Paper } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import BlogPost from '../components/BlogPost';

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
    top: 40,
    left: '45%',
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
}));

export default function CreatePost() {
  const classes = useStyles();

  return (
    <div>
      <div className="mb-40">
        <div className={classes.banner} />
        <Container>
          <Avatar className={classes.large} />
          <Card className={classes.infoCard}>
            <CardContent>
              <Typography className={classes.username}>Jhon Willams</Typography>
              <Typography>a@email.com</Typography>
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
              <Typography className={classes.text}>3 posts</Typography>
              <Typography className={classes.text}>5 comments</Typography>
            </Paper>
          </Grid>

          {/* Post List */}
          <Grid item xs={10} sm={8}>
            <BlogPost className={classes.paper} name="Jhon Willams" id={1} />
            <BlogPost className={classes.paper} name="Jhon Willams" id={1} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
