function solution(a, b) {

    let answer = 0;

    if (a === b) return a;
    
    let start = a;
    let end = b;
    
    if (a > b) {
        start = b;
        end = a;
    }
    
    while (start <= end) {
        answer += start;
        start++;
    }
    
    return answer;
    
}