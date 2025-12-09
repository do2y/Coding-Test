function solution(num_list) {
    let odd_nums = num_list.filter((v,i) => (i+1) % 2 === 0);
    let even_nums = num_list.filter((v,i) => (i+1) % 2 !== 0);
    
    let odd_sum = odd_nums.reduce((a,c) => a+c,0);
    let even_sum = even_nums.reduce((a,c) => a+c, 0);
    
    return Math.max(odd_sum, even_sum);
}