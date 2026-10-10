function solution(arr) {

    let min = Math.min(...arr);
    let filteredArr = arr.filter(num => num !== min);
    
    return filteredArr.length === 0 ? [-1] : filteredArr;
    
}