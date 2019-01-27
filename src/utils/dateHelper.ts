export function timeDistance(date: any) {
  var oneMinute = 60 * 1000;
  var oneHour = oneMinute * 60;
  var oneDay = oneHour * 24;
  var oneMonth = oneDay * 30;
  var oneYear = oneDay * 365;

  var elapsed = Date.now() - date;

  if (elapsed < oneMinute) return Math.round(elapsed / 1000) + ' seconds ago';
  else if (elapsed < oneHour) return Math.round(elapsed / oneMinute) + ' minutes ago';
  else if (elapsed < oneDay) return Math.round(elapsed / oneHour) + ' hours ago';
  else if (elapsed < oneMonth) return Math.round(elapsed / oneDay) + ' days ago';
  else if (elapsed < oneYear) return Math.round(elapsed / oneMonth) + ' months ago';
  else return Math.round(elapsed / oneYear) + ' years ago';
}
