function solution(num_list) {
    const product = num_list.reduce((a,c) => a * c, 1);
    const sum = num_list.reduce((a,c) => a + c, 0);
    const squareOfSum = Math.pow(sum, 2);
    
    return product < squareOfSum ? 1 : 0;
}