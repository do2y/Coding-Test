function solution(date1, date2) {
    const toDateString = ([year, month, day]) =>
        String(year).padStart(4, "0") +
        String(month).padStart(2, "0") +
        String(day).padStart(2, "0");

    return toDateString(date1) < toDateString(date2) ? 1 : 0;
}