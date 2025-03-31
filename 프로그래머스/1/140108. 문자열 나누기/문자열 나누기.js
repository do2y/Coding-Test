function solution(s) {
    let answer = 1;
    
    let same = 0, diff = 0;
    let start = s[0];
    
    for(let i=0; i<s.length; i++){
        if(start === s[i])
            same++;
        else
            diff++;
        
        if(same == diff && i+1<s.length){
            answer++;
            start = s[i+1];
            console.log(start);
        }
    }
    
    return answer;
}