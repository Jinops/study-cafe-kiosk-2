export function dateToString(date:Date):String {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const YYYY = date.getFullYear();
    const MM = month >= 10 ? month : '0' + month;
    const DD = day >= 10 ? day : '0' + day;
    const hh = hour >= 10 ? hour : '0' + hour;
    const mm = minute >= 10 ? minute : '0' + minute;
    const ss = second >= 10 ? second : '0' + second;

    return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}
