import api from '../api';
import {Team} from './Models';

const Teams = {
  fetchByID: async (id: number): Promise<Team> => {
    const response = await api.get(`/teams?filter[id]=${id}`);
    return response.data[0] as Team;
  },
};

export default Teams;
