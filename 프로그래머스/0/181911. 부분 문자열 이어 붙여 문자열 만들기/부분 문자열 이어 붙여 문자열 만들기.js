function solution(my_strings, parts) {

    let answer = "";
    
    for (let i=0; i<my_strings.length; i++) {
        let start = parts[i][0];
        let end = parts[i][1];
        
        answer += my_strings[i].slice(start, end+1);
    }
    
    return answer;
}