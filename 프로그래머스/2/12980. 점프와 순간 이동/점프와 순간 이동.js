function solution(n)
{
    let usage = 0;
    
    while ( n > 0 ) {
        usage += (n%2);
        n = Math.floor(n/2);
    }
    
    return usage;
}