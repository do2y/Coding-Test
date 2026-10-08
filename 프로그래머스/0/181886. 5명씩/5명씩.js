function solution(names) {
    
    const answer = names.filter((person, i) => i%5 === 0);
    return answer;
    
}