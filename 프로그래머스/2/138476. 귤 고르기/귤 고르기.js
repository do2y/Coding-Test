function solution(k, tangerine) {
   
    const tangerineCount = {};
    
    for (let size of tangerine) {
        if (!tangerineCount[size]) { 
            tangerineCount[size] = 0; 
        }
        tangerineCount[size]++;
    }
    
    let sorted = Object.entries(tangerineCount).sort((a, b) => b[1] - a[1]);
    
    let sum = 0;
    let pickCount = 0;
    for (let [size, count] of sorted) {
        sum += count;
        pickCount++;
        if ( sum >= k )
            break;
    }
    
    return pickCount;
}