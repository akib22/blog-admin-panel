import { Container, Typography, Avatar, TextField, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../components/Comment';

const useStyles = makeStyles((theme) => ({
  postTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    paddingTop: 25,
  },
  postContent: {
    padding: '12px 0',
    fontSize: 16,
    color: '#000',
    borderBottom: '1px solid #eee',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    padding: 15,
    marginTop: 40,
  },
  exploreContainer: {
    minHeight: '100vh',
  },
  exploreUser: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  exploreEmail: {
    fontSize: 12,
  },
  exploreTitle: {
    borderBottom: '1px solid #eee',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
}));

export default function Post() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={10} sm={8}>
          <div>
            <Typography className={classes.postTitle}>How to test your react app</Typography>
            <div className="flex items-center">
              <Avatar className="mr-8" />
              <Typography>name</Typography>
            </div>
          </div>
          <Typography className={classes.postContent}>
            loasdfkj asdfjalskdfjasdf sdlkfjsldkfjsdlfkjsdlfk fasdlkjasdf
            sdfsdkfjsdlfkjsdlfkjflksjdfl asdfkjsdfj asdfjlskdf asfldkjs fdlksd
          </Typography>
          <div className="mt-8">
            <form>
              <TextField
                style={{ width: '100%' }}
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Type a comment"
                variant="outlined"
              />
              <div className="text-right mt-8 mb-10">
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              </div>
            </form>
            <Comment comment="testing purpose" />
            <Comment comment="testing purpose" />
          </div>
        </Grid>
        <Grid item xs={4} sm={4} className={classes.exploreContainer}>
          <Paper className={`mb-10 ${classes.card}`}>
            <Typography className={classes.exploreTitle}>Explore More</Typography>
            <div className="flex items-center mb-10">
              <Avatar className="mr-8" />
              <div>
                <Typography className={classes.exploreUser}>Kent C. Dodds</Typography>
                <Typography className={classes.exploreEmail}>kent@gmail.com</Typography>
              </div>
            </div>
            <div className="flex items-center mb-10">
              <Avatar className="mr-8" />
              <div>
                <Typography className={classes.exploreUser}>Dan Abramov</Typography>
                <Typography className={classes.exploreEmail}>dan@gmail.com</Typography>
              </div>
            </div>
            <div className="flex items-center mb-10">
              <Avatar className="mr-8" />
              <div>
                <Typography className={classes.exploreUser}>Ryan Dhal</Typography>
                <Typography className={classes.exploreEmail}>rayn@gmail.com</Typography>
              </div>
            </div>
            <div className="flex items-center mb-10">
              <Avatar className="mr-8" />
              <div>
                <Typography className={classes.exploreUser}>Eric Watson</Typography>
                <Typography className={classes.exploreEmail}>Eric@gmail.com</Typography>
              </div>
            </div>
            <div className="flex items-center">
              <Avatar className="mr-8" />
              <div>
                <Typography className={classes.exploreUser}>Emma Boaston</Typography>
                <Typography className={classes.exploreEmail}>emma@gmail.com</Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
