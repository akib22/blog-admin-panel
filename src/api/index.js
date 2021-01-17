import axios from 'axios';

axios.defaults.headers.post.Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;

const API = axios.create({
  baseURL: 'https://gorest.co.in/public-api/',
  responseType: 'json',
});

async function getUsers() {
  try {
    const { data } = await API.get('/users');
    return data;
  } catch (err) {
    console.error('users fetching error', err);
    throw err;
  }
}

async function getUser(userId) {
  try {
    const { data } = await API.get(`/users/${userId}/`);
    return data;
  } catch (err) {
    console.error('user fetching error', err);
    throw err;
  }
}

async function getPosts(userId) {
  try {
    const { data } = await API.get(`/users/${userId}/posts`);
    return data;
  } catch (err) {
    console.error('posts fetching error', err);
    throw err;
  }
}

async function getPost(userId, postId) {
  try {
    const { data } = await API.get(`/users/${userId}/posts`);
    return data.data.filter((item) => item.id === parseInt(postId, 10))[0];
  } catch (err) {
    console.error('post fetching error', err);
    throw err;
  }
}

async function getComments(postId) {
  try {
    const { data } = await API.get(`/posts/${postId}/comments`);
    return data;
  } catch (err) {
    console.error('comments fetching error', err);
    throw err;
  }
}

async function addComment({ postId, comment }) {
  try {
    const { data } = await API.post(`/posts/${postId}/comments`, {
      name: 'ar',
      email: 'ar@gmail.com',
      body: comment,
    });
    return data;
  } catch (err) {
    console.error('add comment error', err);
    throw err;
  }
}

async function addPost({ title, body, user }) {
  try {
    const { data } = await API.post(`/users/${user}/posts`, { title, body });
    return data;
  } catch (err) {
    console.error('add comment error', err);
    throw err;
  }
}

export { getUsers, getUser, getPosts, getPost, getComments, addComment, addPost };
