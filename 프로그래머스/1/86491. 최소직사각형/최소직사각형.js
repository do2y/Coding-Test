function solution(sizes) { 
    
    let long = 0;
    let short = 0;
    
    for (const [w, h] of sizes) {
        let l = Math.max(w, h);
        let s = Math.min(w, h);
        
        long = Math.max(long, l);
        short = Math.max(short, s);
    }
    
    return long * short;
}