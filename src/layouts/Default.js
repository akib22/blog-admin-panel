import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import Post from '../pages/Post';
import NotFound from '../pages/NotFound';
import CreatePost from '../pages/CreatePost';
import Navbar from '../components/Navbar';

export default function Default() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/:userId" component={User} />
        <Route path="/:userId/posts/:postId" component={Post} />
        <Route path="/create-post" component={CreatePost} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
