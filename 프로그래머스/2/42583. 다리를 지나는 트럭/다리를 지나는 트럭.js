function solution(bridge_length, weight, truck_weights) {

    const bridgeQueue = Array(bridge_length).fill(0);
    let time = 0;
    let currentBridgeWeight = 0;

    truck_weights.forEach(truck_weight => {

        while (true) {
            
            const outTruck = bridgeQueue.shift();
            currentBridgeWeight -= outTruck;

            // 현재 트럭이 올라갈 수 있다면
            if (currentBridgeWeight + truck_weight <= weight) {
                bridgeQueue.push(truck_weight);
                currentBridgeWeight += truck_weight;
                time++;
                break;
            }

            // 올라갈 수 없다면
            bridgeQueue.push(0);
            time++;
        }
    });

    return time + bridge_length;
}