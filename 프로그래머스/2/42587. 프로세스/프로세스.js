function solution(priorities, location) {
    
    const queue = priorities.map((priority, idx) => ({idx, priority}));
    
    let cnt = 0;
    
    while (true) {
        
        const currentProcess = queue.shift();
        if (queue.some(v => v.priority > currentProcess.priority)) 
            queue.push(currentProcess);
            
        else {
            cnt++;
            if (currentProcess.idx === location) return cnt;
        }
        
    }    
}