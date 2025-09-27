function solution(elements) {
    const n = elements.length;
    const set = new Set();

    for (let len = 1; len <= n; len++) {     
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let k = 0; k < len; k++) {
                sum += elements[(start + k) % n];  
            }
            set.add(sum);
        }
    }
    return set.size;
}
