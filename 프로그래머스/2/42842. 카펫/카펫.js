function solution(brown, yellow) {
    for (let h = 1; h <= Math.sqrt(yellow); h++) {
        if (yellow % h !== 0) continue;   
        
        let w = yellow / h; 
        
        let totalWidth = w + 2;
        let totalHeight = h + 2;
        
        if (totalWidth * totalHeight === brown + yellow) {
            return [totalWidth, totalHeight];
        }
    }
}
