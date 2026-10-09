function solution(fees, records) {

    const [baseTime, baseFee, unitTime, unitFee] = fees;
    
    const parking = new Map();
    const totalParkingTime = {};
    
    records.forEach(record => {
        const [time, carNumber, status] = record.split(" ");
        
        const minutes = transformTime(time);
        
        if (status === "IN") parking.set(carNumber, minutes);
        if (status === "OUT") {
            let parkingTime = minutes - parking.get(carNumber);
            totalParkingTime[carNumber] = (totalParkingTime[carNumber] || 0) + parkingTime;
            
            parking.delete(carNumber);
        }   
    });
    
    // parking에 남아있는것 = 출차된적 없는 차량
    for (const [carNumber, entryTime] of parking) {
        const minutes = transformTime("23:59");

        let parkingTime = minutes - parking.get(carNumber);
        totalParkingTime[carNumber] = (totalParkingTime[carNumber] || 0) + parkingTime;
    }
    
    const totalFee = {};
    for (const [carNumber, time] of Object.entries(totalParkingTime)) {
        let fee = baseFee;
        
        if (time > baseTime) {
            fee = baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
        }
        
        totalFee[carNumber] = fee;
    }
    
    const answer = Object.entries(totalFee).sort((a, b) => Number(a[0]) - Number(b[0])).map(([key, value]) => value);
    return answer;

}

function transformTime(time) {
    const [hour, min] = time.split(":").map(Number);
    return (hour * 60) + min;
}

