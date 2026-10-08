function solution(my_string, m, c) {
    let answer = "";
    
    for (let i=c-1; i<my_string.length; i++) {
        answer += my_string[i];
        i += m-1;
    }
    
    return answer;
}