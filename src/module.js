export const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const months = [
  "January",
  "Febraury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// get date function
export const getDate = (dateUnix, timeZone) => {
  const date = new Date((dateUnix + timeZone) * 1000);
  const weekDays = weekDays[date.getUTCDate()];
  const months = months[date.getUTCMonth()];

  return ` ${date}, ${weekDays} , ${months}`;
};

export const getTime = (timeUnix, timeZone) => {
  const date = new Date((timeUnix, timeZone) * 1000);
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();
  const period = hours <= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes}:${period}`;
};

export const getHours = (timeUnix, timeZone) => {
  const date = new Date((timeUnix, timeZone) * 1000);
  const hours = date.getUTCHours();
  const period = hours <= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes}:${period}`;
};
