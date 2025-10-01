function solution(n, left, right) {
    
    let arr = [];
    let idx = left;
    
    for (; left<=right; left++) {
        
        let row = Math.floor(left/n) + 1;
        let col = (left % n) + 1;
        
        if (row < col)
            arr.push(col);
        else 
            arr.push(row);
    }
     
    return arr;
    
}