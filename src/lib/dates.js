const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

function dateParts(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return { year, month, day };
}

export function formatDisplayDate(dateString) {
  const { year, month, day } = dateParts(dateString);

  if (!year || !month || !day) {
    return dateString;
  }

  return `${monthNames[month - 1]} ${day}, ${year}`;
}
