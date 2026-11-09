function solution(want, number, discount) {
    
    let answer = 0;
    
    for (let start = 0; start <= discount.length - 10; start++) {
        
        const tenDays = discount.slice(start, start + 10);
        
        let flag = true;
        for (let i=0; i<want.length; i++) {
            if (tenDays.filter(item => item === want[i]).length !== number[i]) {
                flag = false;
                break;
            }
        }
        
        if (flag) answer++;
        
    }
    
    return answer;
    
}