import api from './api';

const PAGE_SIZE = 10;

const Matches = {
  fetch: async (page: number) => {
    const response = await api.get(
      `/matches/upcoming?sort=&page=${page}&per_page=${PAGE_SIZE}`,
    );
    return response.data;
  },
  getTotalPages: async () => {
    const response = await api.get(
      `/matches/upcoming?sort=&page=1&per_page=${PAGE_SIZE}`,
    );
    const linkHeader = response.headers.link;
    const totalPages = extractTotalPagesFromLinkHeader(linkHeader);
    return totalPages;
  },
};

const extractTotalPagesFromLinkHeader = (linkHeader) => {
  if (!linkHeader) return 0;

  const lastLink = linkHeader
    .split(',')
    .find(link => link.includes('rel="last"'));
  if (!lastLink) return 0;

  const pageNumber = lastLink.match(/page=(\d+)/)[1];
  return parseInt(pageNumber);
};

export default Matches;
