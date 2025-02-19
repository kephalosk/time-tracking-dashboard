import {TimeEnum} from "./TimeEnum.js";

const timeDailyValues = {
    timeSelector: 'timeDaily',
    timeEnum: TimeEnum.DAILY
};

const timeWeeklyValues = {
    timeSelector: 'timeWeekly',
    timeEnum: TimeEnum.WEEKLY
};

const timeMonthlyValues = {
    timeSelector: 'timeMonthly',
    timeEnum: TimeEnum.MONTHLY
};

export const TimeValues = [timeDailyValues, timeWeeklyValues, timeMonthlyValues];
