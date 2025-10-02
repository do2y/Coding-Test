function solution(citations) {
    
    let h_index = 0;
    let n = citations.length;
    
    citations.sort((a,b) => a-b);
    
    for (let i=0; i<n; i++) {
        let h = citations[i];
        let aboveHCount = n - i;
        
        if (h >= aboveHCount) {
            h_index = Math.max(h_index, aboveHCount);
        }

    }
    
    return h_index;
}