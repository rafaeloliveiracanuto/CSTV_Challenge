import axios from 'axios';
import settingsConfig from '../settings/settings.config';

const api = axios.create({
  baseURL: settingsConfig.baseURL,
  headers: {
    Authorization: settingsConfig.token,
  },
});

export default api;
