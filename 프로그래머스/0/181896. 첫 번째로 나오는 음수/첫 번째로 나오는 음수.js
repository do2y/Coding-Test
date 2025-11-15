function solution(num_list) {
    const arr = num_list.filter(v => v < 0);
    
    if (arr.length === 0)
        return -1;
    else
        return num_list.indexOf(arr[0]);
}