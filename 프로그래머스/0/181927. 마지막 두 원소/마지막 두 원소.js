function solution(num_list) {
    
    let lastNum = num_list[num_list.length-1];
    let secondLastNum = num_list[num_list.length-2];
    
    if (lastNum > secondLastNum)
        num_list.push(lastNum-secondLastNum);
    else
        num_list.push(lastNum*2);
    
    return num_list;
    
}