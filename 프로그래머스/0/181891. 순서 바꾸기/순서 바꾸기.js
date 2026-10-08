function solution(num_list, n) {
    const left = num_list.slice(0, n);
    const right = num_list.slice(n);
    
    return [...right, ...left];
}