// Get month number

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',];

const month = (s) => {
  length = months.length;
  for (let i = 0; i < length; i++) {
    if (s.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

require('../Tests/month.js')(month);
