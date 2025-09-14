function solution(my_string, index_list) {
    let answer = "";
    
    index_list.forEach(index => {
        answer += my_string[index];
    });
    
    return answer;
}