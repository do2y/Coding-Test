function solution(n) {
    var answer = [];
    let num = n;
    
    for(let i=2; i<=n; i++){
        if(Number.isInteger(num/i)){
            answer.push(i);
            while (num % i === 0) { 
                num /= i;
            }
        } 
    }
    return answer; 
}
