/*function solution(want, number, discount) {
    
    let answer = 0;
    
    for (let start = 0; start <= discount.length - 10; start++) {
        
        const tenDays = discount.slice(start, start + 10);
        
        let flag = true;
        for (let i=0; i<want.length; i++) {
            if (tenDays.filter(item => item === want[i]).length !== number[i])
                flag = false;
            break;
        }
        
        if (flag) answer++;
    }
    
    return answer;
    
} */


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