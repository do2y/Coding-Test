function solution(s){
    const arr = [...s.toUpperCase()];
    return arr.filter(v => v === "P").length === arr.filter(v => v === "Y").length;
}