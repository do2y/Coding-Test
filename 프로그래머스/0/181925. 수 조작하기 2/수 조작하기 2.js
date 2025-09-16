function solution(numLog) {
    let answer = "";
    let diffDict = { "1":"w", 
                    "-1":"s", 
                    "10":"d", 
                    "-10":"a"};
    
    for(let i=0; i<numLog.length-1; i++) {
        let diff = numLog[i+1] - numLog[i];
        answer += diffDict[diff] || "";
    }
    
    return answer;
}