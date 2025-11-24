function solution(strArr) {
    
    let answer = [];
    for (let str of strArr) {
        if (!str.includes("ad"))
            answer.push(str);
    }
    
    return answer;
}