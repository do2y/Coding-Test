function solution(k, tangerine) {
   
    const tangerineCount = {};
    
    for (let size of tangerine) {
        tangerineCount[size] = (tangerineCount[size] || 0) + 1;
    }
    

    const sorted = Object.values(tangerineCount).sort((a, b) => b - a);

    
    let sum = 0;
    let pickCount = 0;
    for (let count of sorted) {
        sum += count;
        pickCount++;
        if ( sum >= k )
            break;
    }
    
    return pickCount;
}