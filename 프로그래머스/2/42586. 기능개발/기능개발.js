function solution(progresses, speeds) {
    let answer = [];
    
    const workPeriodArr = progresses.map((progress, i) => {
        return Math.ceil((100 - progress) / speeds[i]);
    });
    
    let preWorkPeriod = workPeriodArr[0];
    let count = 0;
    
    for (let i=0; i<workPeriodArr.length; i++) {
        let period = workPeriodArr[i];
        
        if (period <= preWorkPeriod) {
            count++;
        }
        else {
            answer.push(count);
            
            preWorkPeriod = period;
            count = 1;
        }
        
        if (i === workPeriodArr.length - 1)
            answer.push(count);
    }
  
    return answer;
}