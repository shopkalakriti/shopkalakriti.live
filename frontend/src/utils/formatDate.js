function formatDate(dateString) {
  // Extract year, month, and day portions from string
  const year = dateString.substr(0, 4);
  const month = dateString.substr(5, 2);
  const day = dateString.substr(8, 2);

  // Create a Date object from the year, month, and day portions
  const date = new Date(`${year}-${month}-${day}`);

  // Format the date as a string in the desired format
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return formattedDate;
}

export default formatDate;
