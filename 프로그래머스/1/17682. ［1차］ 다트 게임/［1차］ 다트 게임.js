function solution(dartResult) {
      let score = 0;
      let temp = 0;
      let answer = [];

    for (let i=0; i<dartResult.length; i++) {
        let ch = dartResult[i];
        
        //숫자인 경우
        if (ch >= "0" && ch <= "9") {
            if (ch === "1" && dartResult[i+1] === "0") {
                temp = 10;
                i++;
            }
            else temp = Number(ch);  
        } else if (ch === "S") {
            answer.push(temp);
        } else if (ch  === "D") {
            answer.push(Math.pow(temp, 2));
        } else if (ch === "T") {
             answer.push(Math.pow(temp, 3));
        } else if (ch === "*") {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
         } else if (ch === "#") {
            answer[answer.length - 1] *= -1;
        }
    }
    
    score = answer.reduce((a,c) => a+c, 0);
    return score;
}  


