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
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <Container>
      <Typography className={classes.cpTitle}>Create Post</Typography>
      <form>
        <TextField
          className="mb-20 w-100"
          id="post-title"
          placeholder="Enter post title"
          variant="outlined"
          label="Post title"
          required
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
        />
        <FormControl variant="outlined" className={`w-100 mb-20 ${classes.formControl}`}>
          <InputLabel id="user">Select a user</InputLabel>
          <Select
            labelId="user"
            id="user"
            value={10}
            onChange={() => console.log('change a')}
            label="Select a user"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button className="w-100" type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}
