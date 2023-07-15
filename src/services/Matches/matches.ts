import moment from 'moment';
import {extractTotalPagesFromLinkHeader} from '../../settings/functions';
import api from '../api';
import {Match} from './Models';

const PAGE_SIZE = 100;
const startDate = moment().utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z';
const endDate =
  moment().utc().add(15, 'days').format('YYYY-MM-DDTHH:mm:ss') + 'Z';

const Matches = {
  fetch: async (page: number): Promise<Match[]> => {
    const response = await api.get(
      `/matches/?page=${page}&per_page=${PAGE_SIZE}`,
      {
        params: {
          range: `${startDate},${endDate}`,
        },
      },
    );
    return response.data as Match[];
  },
  sort: (data: Match[]) => {
    const filteredResponse = data?.filter(
      item => item.status === 'running' || item.status === 'not_started',
    );
    const sortedResponse = filteredResponse?.sort((a, b) => {
      if (a.status === 'running' && b.status !== 'running') {
        return -1;
      } else if (a.status !== 'running' && b.status === 'running') {
        return 1;
      } else if (a.status === 'running' && b.status === 'running') {
        return moment(a.begin_at).diff(b.begin_at);
      } else {
        const diffA = Math.abs(moment().diff(a.begin_at));
        const diffB = Math.abs(moment().diff(b.begin_at));
        return diffA - diffB;
      }
    });
    return sortedResponse as Match[];
  },
  getTotalPages: async () => {
    const response = await api.get(`/matches/?page=1&per_page=${PAGE_SIZE}`);
    const linkHeader = response.headers.link;
    const totalPages = extractTotalPagesFromLinkHeader(linkHeader);
    return totalPages as number;
  },
};

export default Matches;
