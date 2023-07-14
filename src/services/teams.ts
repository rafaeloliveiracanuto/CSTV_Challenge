import api from './api';

const Teams = {
  fetchByID: async (id: number) => {
    const response = await api.get(`/teams?filter[id]=${id}`);
    return response.data[0];
  },
};

export default Teams;
