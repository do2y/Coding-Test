function solution(n) {
    let cnt = 0;
    let isPrime = true;
    
    for(let num=3; num<=n; num++) {
        if(num%2 == 0)   
                continue;
        for(let i=3; i<= Math.floor(Math.sqrt(num)); i++) {
            if(num%i == 0){
                 isPrime = false;
                 break;
            }    
        }
        
        isPrime ? cnt++ : cnt+=0
        isPrime = true;
    }
    return cnt+1;
}
