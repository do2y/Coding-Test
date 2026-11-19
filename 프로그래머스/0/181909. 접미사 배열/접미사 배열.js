function solution(my_string) {
    const answer = [];
    
    for (let i=my_string.length-1; i>=0; i--) {
        const str = my_string.slice(i);
        answer.push(str);
    }
    
    return answer.sort();
}