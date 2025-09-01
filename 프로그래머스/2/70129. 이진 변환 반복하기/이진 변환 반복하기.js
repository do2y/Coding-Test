function solution(s) {
  
    let bin_cnt = 0;
    let del_zero_cnt = 0;
    
    while(s !== "1") {
        bin_cnt++;
        
        const ones = (s.match(/1/g).length); 

        del_zero_cnt += (s.length - ones);
        
        s = ones.toString(2);
    }
    
    return [bin_cnt, del_zero_cnt];
    
}