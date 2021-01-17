import axios from 'axios';

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
    console.error('user fetching error', err);
    throw err;
  }
}

async function getPost(userId, postId) {
  try {
    const { data } = await API.get(`/users/${userId}/posts`);
    return data.data.filter((item) => item.id === parseInt(postId, 10))[0];
  } catch (err) {
    console.error('user fetching error', err);
    throw err;
  }
}

async function getComments(postId) {
  try {
    const { data } = await API.get(`/posts/${postId}/comments`);
    return data;
  } catch (err) {
    console.error('user fetching error', err);
    throw err;
  }
}

export { getUsers, getUser, getPosts, getPost, getComments };
