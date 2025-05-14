function solution(n) {
    let binary = n.toString(2);
    let cnt_one = [...binary].filter(v => v === '1').length;
    
    let idx = 1;
    while(true) {
        let next = n+idx;
        let next_cnt_one = [...next.toString(2)].filter(v => v === '1').length;
        
        if(cnt_one === next_cnt_one)
            return next;
        else
            idx++;
    }
}