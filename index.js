const dayjs = require('dayjs');

const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

const date = dayjs.tz("2013-11-18 11:55:20", "America/Toronto")