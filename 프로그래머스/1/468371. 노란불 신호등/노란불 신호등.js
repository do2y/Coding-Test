function solution(signals) {
    
    let yellowRange = signals.map(([g, y, r]) => [g + 1, g + y]);   //시작 시간, 끝시간
    const cycleLengths = signals.map(v => v.reduce((a,c) => a+c, 0));
    
    let repeatPeriod = cycleLengths[0];
    for (let i=1; i<cycleLengths.length; i++) {
        let cycleLength = cycleLengths[i];
        
        for (let j=1; j<=cycleLength; j++) {
            if (repeatPeriod * j % cycleLength === 0) {
                repeatPeriod = repeatPeriod * j;
                break;
            }
        }
        
    }
    
    for (let i=1; i<=repeatPeriod; i++) {
        const allYellow = yellowRange.every(([start, end], j) => {
            const cycleSecond = ((i - 1) % cycleLengths[j]) + 1;
            return start <= cycleSecond && cycleSecond <= end;
        });

        if (allYellow) return i;
    }

    return -1;
    
}