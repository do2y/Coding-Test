function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;

    const enterTimeDict = {}; 
    const totalTimeDict = {};  

    function toMin(time) {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }

    records.forEach(record => {
        const [time, carNumber, action] = record.split(" ");

        if (action === "IN") {
            enterTimeDict[carNumber] = toMin(time);
        } else {
            const inTime = enterTimeDict[carNumber];
            const duration = toMin(time) - inTime;

            totalTimeDict[carNumber] = (totalTimeDict[carNumber] || 0) + duration;

            delete enterTimeDict[carNumber]; 
        }
    });

    Object.keys(enterTimeDict).forEach(carNumber => {
        const inTime = enterTimeDict[carNumber];
        const duration = (23 * 60 + 59) - inTime;

        totalTimeDict[carNumber] = (totalTimeDict[carNumber] || 0) + duration;
    });

    const result = Object.keys(totalTimeDict)
        .sort()
        .map(carNumber => {
            const totalTime = totalTimeDict[carNumber];

            if (totalTime <= baseTime) return baseFee;

            return baseFee + Math.ceil((totalTime - baseTime) / unitTime) * unitFee;
        });

    return result;
}