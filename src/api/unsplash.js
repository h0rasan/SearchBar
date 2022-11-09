import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID _UyKAZEvu5RszX6Tlu7woc7TMMBzaUV5eqJbGOV-Dfg',
  },
});
