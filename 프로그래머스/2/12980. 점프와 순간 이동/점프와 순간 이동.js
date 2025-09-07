function solution(n)
{
    let usage = 1; //건전지 사용량
    
    while ( n > 2 ) {
        usage += n - (Math.trunc(n/2) * 2);
        n = Math.trunc(n/2);
    }
    
    return usage;
}