function solution(myString) {
    let arr = myString.split("x");
    
    return arr.map(v => v.length);
}