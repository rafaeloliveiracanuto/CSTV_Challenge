import moment from 'moment';

export const formatDate = (date: string) => {
  const newDate = moment(date);
  const now = moment();
  const diffHours = newDate.diff(now, 'hours');
  const abbreviatedDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  let formattedDate = '';

  if (diffHours <= 24 && diffHours >= 0) {
    formattedDate = 'Hoje, ' + newDate.format('HH:mm');
  } else {
    const diffDays = newDate.diff(now, 'days');

    if (diffDays < 7) {
      formattedDate = newDate.format(
        `[${abbreviatedDays[newDate.day()]}], HH:mm`,
      );
    } else {
      formattedDate = newDate.format('D.MM, HH:mm');
    }
  }
  return formattedDate;
};

export const extractTotalPagesFromLinkHeader = (linkHeader) => {
  if (!linkHeader) return 0;

  const lastLink = linkHeader
    .split(',')
    .find(link => link.includes('rel="last"'));
  if (!lastLink) return 0;

  const pageNumber = lastLink.match(/page=(\d+)/)[1];
  return parseInt(pageNumber);
};
