const dayjs = require('dayjs');


const date1 = dayjs('2023-02-15').format('MMM/DD/YY'); 
// date one with format option 1
const date2 = dayjs('2023-12-155:20:59').format('MMMM-DD-YYYY h:mm:ss');
// date two with format option 2
console.log(date1);
console.log(date2);