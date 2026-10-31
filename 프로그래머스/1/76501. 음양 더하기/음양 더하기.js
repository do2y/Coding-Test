function solution(absolutes, signs) {
    

    const transformedArr = absolutes.map((v, i) => {
        let n = signs[i] ? 1 : -1;
        return v * n;
    });
    return transformedArr.reduce((a,c) => a+c, 0);
    
}