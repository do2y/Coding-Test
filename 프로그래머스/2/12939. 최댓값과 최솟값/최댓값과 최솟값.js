function solution(s) {
    let arr = s.split(" ").map(v => Number(v));
    return Math.min(...arr).toString() + " " + Math.max(...arr).toString();
}