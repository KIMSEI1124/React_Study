import { axios } from 'apis/axios';

const getApi = () => {
  return axios.get('/api/users?page=2');
};

export { getApi };
