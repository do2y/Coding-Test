function solution(n, w, num) {
    
    let removeCount = 0;
    
    while (num <= n) {
        
        const distanceToRowEnd = Math.ceil(num / w) * w - num;
        num = num + (distanceToRowEnd * 2) + 1;
    
        removeCount++;
          
    }
    
    return removeCount;
}