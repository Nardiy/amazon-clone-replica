import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL:'https://us-central1-front-end-4b258.cloudfunctions.net/api',
  // baseURL: 'http://localhost:5001/front-end-4b258/us-central1/api',
});

export default instance;