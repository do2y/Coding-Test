function solution(n) {
    const countOnes = (num) => num.toString(2).split("1").length - 1;
    
    const cnt_one = countOnes(n);
    
    let idx = 1;
    while(true) {
        let next = n+idx;
        if( countOnes(next) === cnt_one )
            return next;
        else
            idx++;
    }
    
}