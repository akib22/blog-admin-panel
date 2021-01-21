import { useState } from 'react';
import { Container, Typography, Avatar, TextField, Button, Grid, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useQueries, useMutation, useQueryClient } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../components/Comment';
import Toast from '../components/common/Toast';
import Loader from '../components/common/Loader';
import SomethingWentWrong from '../components/common/SomethingWentWrong';
import { getPost, getComments, getUser, addComment } from '../api';

const useStyles = makeStyles((theme) => ({
  postTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 10,
    lineHeight: 1.2,
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
  const { postId, userId } = useParams();
  const [comment, setComment] = useState('');
  const [commentAddingStatus, setCommentAddingStatus] = useState({
    status: false,
    msg: '',
    type: '',
  });
  const queryClient = useQueryClient();
  const [post, comments, user] = useQueries([
    { queryKey: ['post', postId], queryFn: () => getPost(userId, postId) },
    { queryKey: ['comments', postId], queryFn: () => getComments(postId) },
    { queryKey: ['user', userId], queryFn: () => getUser(userId) },
  ]);
  const mutation = useMutation((payload) => addComment(payload));

  if (post.isLoading || comments.isLoading || user.isLoading) {
    return <Loader />;
  }

  if (post.isError || comments.isLoading || user.isLoading) {
    return <SomethingWentWrong />;
  }

  function handelSubmit(e) {
    e.preventDefault();
    mutation.mutate(
      { postId, comment },
      {
        onSuccess: (data) => {
          if (data.code === 201) {
            setComment('');
            queryClient.invalidateQueries('comments');
            setCommentAddingStatus((state) => ({
              ...state,
              status: true,
              msg: 'Comment added successfully!',
              type: 'success',
            }));
          } else {
            setCommentAddingStatus((state) => ({
              ...state,
              status: true,
            }));
          }
          window.scroll({ top: 0, behavior: 'smooth' });
        },
      },
      {
        onError: () => {
          setCommentAddingStatus((state) => ({
            ...state,
            status: true,
          }));
        },
      },
    );
  }

  if (user.data.code === 404) {
    return (
      <div className="w-100 h-80 flex justify-center items-center">
        <Typography variant="h5">{user.data.data.message}</Typography>
      </div>
    );
  }

  if (!post.data) {
    return (
      <div className="w-100 h-80 flex justify-center items-center">
        <Typography variant="h5">Resource not found.</Typography>
      </div>
    );
  }

  return (
    <Container>
      {commentAddingStatus.status && (
        <Toast
          message={commentAddingStatus.msg}
          type={commentAddingStatus.type}
          status={commentAddingStatus.status}
          setStatus={() => setCommentAddingStatus((state) => ({ ...state, status: false }))}
        />
      )}
      <Grid container spacing={3}>
        <Grid item xs={10} sm={8}>
          <div>
            <Typography className={classes.postTitle}>{post.data.title}</Typography>
            <div className="flex items-center">
              <Avatar className="mr-8" />
              <Typography>{user.data.data.name}</Typography>
            </div>
          </div>
          <Typography className={classes.postContent}>{post.data.body}</Typography>
          <div className="mt-8">
            <form onSubmit={handelSubmit}>
              <TextField
                style={{ width: '100%' }}
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Type a comment"
                variant="outlined"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className="text-right mt-8 mb-10">
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              </div>
            </form>
            {comments.data &&
              comments.data.data.map((comment) => (
                <Comment key={comment.id} comment={comment.body} />
              ))}
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
