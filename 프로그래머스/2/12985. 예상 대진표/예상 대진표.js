function solution(n,a,b)
{
    let round = 0; 
    
    while (n >= 2) {
        round++;

        let min = Math.min(a,b);
        let max = Math.max(a,b);
        
        if ((max - min === 1) && (min % 2 === 1))
            break;
        
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        
        n/=2;
       
    }
  
    return round;
}