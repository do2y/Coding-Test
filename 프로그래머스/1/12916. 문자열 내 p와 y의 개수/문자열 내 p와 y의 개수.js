function solution(s) {
    
    let arr = s.split("");
    return arr.filter(v => v === "P" || v === "p").length === arr.filter(v => v === "Y" || v === "y").length
    
 }