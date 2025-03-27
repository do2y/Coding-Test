function solution(N, stages) {
    let answer = [];

    stages.sort((a,b) => a-b);    
    let countMap = new Map();
    let failureArr = []; 

    stages.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    let playersLeft = stages.length;
    
    for(let i=1; i<=N; i++){
        if (playersLeft === 0){
            failureArr.push({stage: i, rate:0});
            continue;
        }
        let fail = countMap.get(i) || 0;
        let failureRate = fail / playersLeft;
        failureArr.push({ stage: i, rate: failureRate });
        playersLeft -= fail;
    }
 
    failureArr.sort((a, b) => b.rate - a.rate || a.stage - b.stage);
    answer = failureArr.map(item => item.stage);
    return answer;
}
