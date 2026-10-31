function solution(absolutes, signs) {
    
    return absolutes.reduce((a, c, i) => {
        const sign = signs[i] ? 1 : -1;
        return a + c * sign;
    }, 0);
    
}