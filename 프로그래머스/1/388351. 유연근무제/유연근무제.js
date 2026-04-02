function solution(schedules, timelogs, startday) {
    const availableTime = culAvailableTime(schedules);

    const latePerson = new Set();
    for (let i=0; i<7; i++) {
        for (let j=0; j<timelogs.length; j++) {
        
            if (latePerson.has(j)) continue;
            
            let day = ((startday + i -1) % 7) + 1;
            if (day === 6 || day ===7) continue;
            
            let start = timelogs[j][i];
            if (start > availableTime[j]) latePerson.add(j);
        }
    }
    
    return schedules.length - latePerson.size;
}

function culAvailableTime(arr) {
    return arr.map((v) => {
        let hour = Math.floor(v/100);
        let min = (v%100) + 10;
        
        if (min > 59) {
            hour += 1;
            min -= 60;
        }
        
        return hour * 100 + min;
    });
}
