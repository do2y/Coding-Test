function solution(s) {
    let answer = [];
    answer.push(-1);
    
     for (let i = 1; i < s.length; i++) { 
        let index = s.lastIndexOf(s[i], i - 1); 
        answer.push(index !== -1 ? i - index : -1);
    }
    
    return answer;
}