function solution(cacheSize, cities) {
    const hit_time = 1;
    const miss_time = 5;
    
    let execution_time = 0;

    let used = [];
    
    if (cacheSize === 0) 
        return cities.length * miss_time;
    
    cities.forEach((city) => {
        city = city.toUpperCase();
        
        
        if (!used.includes(city)) {
            if (used.length == cacheSize) {
                used.shift();
            }
            used.push(city);
            execution_time += miss_time;
        }
        else {
            let index = used.indexOf(city);
            used.splice(index, 1);
            used.push(city);
            execution_time += hit_time;

        }
    });
    
    return execution_time;
}