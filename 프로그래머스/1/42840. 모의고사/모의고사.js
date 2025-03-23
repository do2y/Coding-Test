function solution(answers) {
    let score = [0,0,0];
    
    let answer1 = [1,2,3,4,5];
    let answer2 = [2,1,2,3,2,4,2,5];
    let answer3 = [3,3,1,1,2,2,4,4,5,5];
    
    answers.forEach((answer,i) => {
        if(answer === answer1[i%answer1.length])
            score[0]+=1;
        if(answer === answer2[i%answer2.length])
            score[1]+=1;
        if(answer === answer3[i%answer3.length])
            score[2]+=1;
    });
    
    let maxScore = Math.max(...score);

    let result = [];

    score.forEach((v,i) => {
        if(v == maxScore)
            result.push(i+1);
    })
    
    return result;
    
}