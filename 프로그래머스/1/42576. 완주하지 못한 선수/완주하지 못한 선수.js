function solution(participant, completion) {
    
    let count = {};
    
    completion.forEach(runner => {
        count[runner] = (count[runner] || 0) + 1;
    });
    
    for (let runner of participant) {
        if (!count[runner] || count[runner] === 0)
            return runner;
        count[runner] -= 1;
    }
}