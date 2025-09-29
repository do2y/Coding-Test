function solution(want, number, discount) {
    let answer = 0;
    
    for (let i=0; i <=discount.length -10; i++) {
        let tenDays = discount.slice(i, i+10);
        
        let flag = 1;
        for (let j=0; j<want.length; j++) {
            if (tenDays.filter(item => item === want[j]).length !== number[j]) {
                flag = 0;
                break;
            }   
        }
        
        if (flag) answer++;
    }
    
    return answer;
}