import axios from 'axios';
import settingsConfig from '../utils/settings.config';

const api = axios.create({
  baseURL: settingsConfig.baseURL,
  headers: {
    Authorization: settingsConfig.token,
  },
});

export default api;
