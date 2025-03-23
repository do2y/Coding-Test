function solution(score) {
    
    const total = score.map(v => v[0] + v[1]);
    const sorted = [...total].sort((a,b) => b-a);
    
    let result = [];
    
    total.forEach(v => {
        result.push(sorted.indexOf(v)+1);
    })
        
    return result;

}