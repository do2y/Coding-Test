function solution(arr) {
    const min = Math.min(...arr);
    
    const filteredArr = arr.filter(v => v !== min);
    
    return filteredArr.length ? filteredArr : [-1];
}