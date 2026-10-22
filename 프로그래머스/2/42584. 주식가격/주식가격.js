function solution(prices) {
    
    const answer = [];
    
    for (let i=0; i<prices.length; i++) {
        
        let curr = prices[i]; 
        let duration = 0;
        
        for (let j=i+1; j<prices.length; j++) {
            let next = prices[j];
            
            duration++;
            if (curr > next) break;
            
        }
        
        answer.push(duration);  
    }
    
    return answer;
}