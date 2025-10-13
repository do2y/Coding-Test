function solution(clothes) {
    
    let categoryCount = {};
    
    clothes.forEach(([_, cloth]) => {
       categoryCount[cloth] = (categoryCount[cloth] || 0) + 1;
    });
    
    let answer = 1;
    for (let key in categoryCount) {
     answer *= categoryCount[key] + 1;
    }
    
    return answer - 1;
}