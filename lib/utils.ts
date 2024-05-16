export const postedAt = (time: string) => {
  // Get current date
  let now = new Date().getTime();
  // Convert string into date
  let then = new Date(time).getTime();
  // Calculate time between
  let diff = now - then;

  // Convert time between into readable format
  if (diff < 60 * 1000) {
    // It was just posted
    return 'now';
  } else if (diff < 3600 * 1000) {
    // It was posted X minutes ago
    return Math.floor(diff / (60 * 1000)) + ' minutes ago';
  } else if (diff < 3600 * 24 * 1000) {
    // It was posted X hours ago
    return Math.floor(diff / (3600 * 1000)) + ' hours ago';
  }
};
