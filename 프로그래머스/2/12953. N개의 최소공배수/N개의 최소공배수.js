function solution(arr) {

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
     
    function gcd(a,b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    
    return arr.reduce((acc, cur) => lcm(acc, cur));
    
}


