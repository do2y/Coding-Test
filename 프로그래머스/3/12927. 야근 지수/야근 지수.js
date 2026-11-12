function solution(n, works) {
    
    const max = Math.max(...works);
    const count = Array(max + 1).fill(0);
    
    
    for (const work of works) {
        count[work]++;
    }
    
    for (let i=max; i>0 && n>0; i--) {
        const decrease = Math.min(count[i], n);

        count[i] -= decrease;
        count[i - 1] += decrease;
        n -= decrease;
    }
    
    return count.reduce((sum, v, i) => {
        return sum + v * i ** 2;
    }, 0);

}