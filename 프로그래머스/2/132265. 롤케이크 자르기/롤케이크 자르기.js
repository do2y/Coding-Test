function solution(topping) {
    
    const left = new Set();
    const right = new Map();    
    
    //오른쪽에 다 넣고 하나씩 빼면서 크기 체크
    topping.forEach((num) => {
        right.set(num, (right.get(num) ?? 0) + 1);
    })
    
    let answer = 0;
    topping.forEach((num) => {
        left.add(num);
        right.set(num, right.get(num) - 1);
        
        if (right.get(num) === 0) {
            right.delete(num);
        }     
        
        if (left.size === right.size) answer++;
    });
    
    return answer;
}