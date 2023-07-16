import moment, {Moment} from 'moment';

export const formatDate = (date: string) => {
  const newDate = moment(date);
  const now = moment();
  const diffDays = newDate.diff(now, 'days');
  const abbreviatedDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  let formattedDate = '';

  if (isSameDayAndMonth(newDate, now)) {
    formattedDate = 'Hoje, ' + newDate.format('HH:mm');
  } else {
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

const isSameDayAndMonth = (date1: Moment, date2: Moment): boolean => {
  return date1.isSame(date2, 'day') && date1.isSame(date2, 'month');
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
