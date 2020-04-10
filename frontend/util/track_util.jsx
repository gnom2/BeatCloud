export const formatUploadTime = (time) => {
  let uploadTime = new Date(time);
  let currentTime = new Date();

  let yearsAgo = currentTime.getFullYear() - uploadTime.getFullYear();
  let monthsAgo = currentTime.getMonth() - uploadTime.getMonth();
  let weeksAgo = Math.floor(
    currentTime.getDate() / 7 - uploadTime.getDate() / 7
  );
  let daysAgo = currentTime.getDate() - uploadTime.getDate();
  let hoursAgo = currentTime.getHours() - uploadTime.getHours();
  let minutesAgo = currentTime.getMinutes() - uploadTime.getMinutes();
  let secondsAgo = currentTime.getSeconds() - uploadTime.getSeconds();

  if (yearsAgo > 1) {
    return `${yearsAgo} years ago`;
  } else if (yearsAgo === 1) {
    return "1 year ago";
  } else if (monthsAgo > 1) {
    return `${monthsAgo} months ago`;
  } else if (monthsAgo === 1) {
    return "1 month ago";
  } else if (weeksAgo > 1) {
    return `${weeksAgo} weeks ago`;
  } else if (weeksAgo === 1) {
    return "1 week ago";
  } else if (daysAgo > 1) {
    return `${daysAgo} days ago`;
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else if (hoursAgo > 1) {
    return `${hoursAgo} hours ago`;
  } else if (hoursAgo === 1) {
    return "1 hour ago";
  } else if (minutesAgo > 1) {
    return `${minutesAgo} minutes ago`;
  } else if (minutesAgo === 1) {
    return "1 minute ago";
  } else {
    return `${secondsAgo} seconds ago`;
  }
};
