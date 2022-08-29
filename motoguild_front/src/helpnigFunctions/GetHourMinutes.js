export default function GetHourMinutes(date)
{
    const hourMinutes = date.split("T")[1].slice(0,5);
    return hourMinutes;

}