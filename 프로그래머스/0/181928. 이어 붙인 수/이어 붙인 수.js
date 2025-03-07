function solution(num_list) {
    let even_num = '';
    let odd_num = ''; 
    
    let arr = [...num_list];
    arr.forEach(v => {
                if (v%2 == 0)
                    even_num += String(v);
                else
                    odd_num += String(v);
    });
    
    return parseInt(even_num) + parseInt(odd_num);
}