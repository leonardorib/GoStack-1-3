import axios from 'axios';

const api = axios.create({
  // Standard address to work with Android Studio Emulator
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
