function solution(number, limit, power) {
    let answer = 0;
    
    for(let num=1; num<=number; num++){
        let cnt = 0;
        for(let i=1; i<=Math.floor(Math.sqrt(num)); i++){
            if(num%i == 0){
                cnt++;     
            }
        }
        
        if(Number.isInteger(Math.sqrt(num)))
            cnt = (cnt*2)-1;
        else
            cnt *= 2;
        
        if(cnt > limit)
            answer += power;
        else
            answer += cnt;
            
    }
    
    return answer;
}