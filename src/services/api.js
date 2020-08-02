import axios from 'axios';
import { server_url } from '../../config.json';

const apiClient = axios.create({
  baseURL: `${server_url}/api/v1/`,
});

export default {
  getMovies: () => apiClient.get('/movie'),
  deleteMovie: (id) => apiClient.delete(`/movie/${id}`),
  addMovie: (data) => apiClient.post('/movie', data),
};
