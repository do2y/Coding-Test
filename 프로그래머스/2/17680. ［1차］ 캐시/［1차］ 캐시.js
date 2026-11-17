function solution(cacheSize, cities) {
  
    const cache = [];
    let executionTime = 0;
    
    const missTime = 5;
    const hitTime = 1;
    
    if (cacheSize === 0) return cities.length * missTime;
    
    cities.forEach(city =>{
        city = city.toUpperCase(); 
        
        if (!cache.includes(city)) {
            if (cache.length === cacheSize) cache.shift();
              
            cache.push(city);
            executionTime += missTime;
        }
        
        else {
            const index = cache.indexOf(city);
            cache.splice(index, 1);
            cache.push(city);
            
            executionTime += hitTime;
        }
    
        
    });
    
    return executionTime;
}