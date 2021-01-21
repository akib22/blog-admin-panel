import {
  Container,
  Typography,
  FormControl,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, useMutation } from 'react-query';
import Toast from '../components/common/Toast';
import Loader from '../components/common/Loader';
import SomethingWentWrong from '../components/common/SomethingWentWrong';
import { getUsers, addPost } from '../api';

const useStyles = makeStyles({
  cpTitle: {
    padding: 12,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default function CreatePost() {
  const classes = useStyles();
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [postAddingStatus, setPostAddingStatus] = useState({
    status: false,
    msg: '',
    type: '',
  });
  const { isLoading, data: users, isError } = useQuery('users', getUsers);
  const mutation = useMutation((payload) => addPost(payload));

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <SomethingWentWrong />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(
      { title, body, user: userId },
      {
        onSuccess: (data) => {
          if (data.code === 201) {
            setTitle('');
            setUserId('');
            setBody('');
            setPostAddingStatus((state) => ({
              ...state,
              status: true,
              msg: 'Post added successfully!',
              type: 'success',
            }));
          } else {
            setPostAddingStatus((state) => ({
              ...state,
              status: true,
            }));
          }

          window.scroll({ top: 0, behavior: 'smooth' });
        },
      },
    );
  }

  return (
    <Container>
      {postAddingStatus.status && (
        <Toast
          message={postAddingStatus.msg}
          type={postAddingStatus.type}
          status={postAddingStatus.status}
          setStatus={() => setPostAddingStatus((state) => ({ ...state, status: false }))}
        />
      )}
      <Typography className={classes.cpTitle}>Create Post</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          className="mb-20 w-100"
          id="post-title"
          placeholder="Enter post title"
          variant="outlined"
          label="Post title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className="mb-20 w-100"
          id="post-body"
          multiline
          rows={6}
          placeholder="Enter post body"
          variant="outlined"
          label="Post body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <FormControl variant="outlined" className={`w-100 mb-20 ${classes.formControl}`}>
          <InputLabel id="user">Select a user</InputLabel>
          <Select
            labelId="user"
            id="user"
            label="Select a user"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            {users.data.map((user) => (
              <MenuItem key={user.email} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button className="w-100" type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}
