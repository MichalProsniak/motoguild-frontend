export default function GetDayMonthYear(date)
{
    const dayMonthYear = date.slice(0,10).split("-").reverse().join(".");
    return dayMonthYear;
}
