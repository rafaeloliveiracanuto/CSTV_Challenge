import Matches from '../matches';
import api from '../../api';
import {mockMatches, mockSortedData} from '../data';
import moment = require('moment');

jest.mock('../../api');

describe('Matches API', () => {
  const PAGE_SIZE = 100;
  const startDate = moment().utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z';
  const endDate =
    moment().utc().add(15, 'days').format('YYYY-MM-DDTHH:mm:ss') + 'Z';

  const mockResponse = {
    data: mockMatches,
  };

  it('should fetch matches correctly with the date range', async () => {
    const mockedApiGet = jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce(mockResponse);

    const fetchedMatches = await Matches.fetch(1);

    expect(mockedApiGet).toHaveBeenCalledWith(
      `/matches/?page=1&per_page=${PAGE_SIZE}`,
      {
        params: {
          range: `${startDate},${endDate}`,
        },
      },
    );
    expect(fetchedMatches).toEqual(mockResponse.data);
  });

  it('should sort matches correctly', () => {
    const sortedMatches = Matches.sort(mockSortedData);

    expect(sortedMatches).toHaveLength(6);
    expect(sortedMatches[0].id).toBe(3);
    expect(sortedMatches[1].id).toBe(2);
    expect(sortedMatches[2].id).toBe(1);
    expect(sortedMatches[3].id).toBe(4);
    expect(sortedMatches[4].id).toBe(5);
    expect(sortedMatches[5].id).toBe(6);
  });
});
