function solution(a, b) {

    let answer = 0;
    
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    
    while (start <= end) {
        answer += start;
        start++;
    }
    
    return answer;
    
}