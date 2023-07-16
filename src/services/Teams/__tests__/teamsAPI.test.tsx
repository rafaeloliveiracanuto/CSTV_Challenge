import api from '../../api';
import {mockTeam} from '../data';
import Teams from '../teams';

jest.mock('../../api');

describe('Teams API', () => {
  it('should fetch team by ID correctly', async () => {
    const mockedApiGet = jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({data: [mockTeam]});

    const team = await Teams.fetchByID(133425);

    expect(mockedApiGet).toHaveBeenCalledWith('/teams?filter[id]=133425');
    expect(team).toEqual(mockTeam);
  });
});
