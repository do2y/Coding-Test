function solution(lottos, win_nums) {
    let answer = [];
    
    let ranking = {6:1, 5:2, 4:3, 3:4, 2:5, 1:6 ,0:6};
    
    let correctNum = 0;
    let unknownNum = 0;
    
    lottos.forEach(num => {
        if(win_nums.includes(num))
            correctNum++;
        if(num == 0)
            unknownNum++;
    })
    
    answer.push(ranking[correctNum + unknownNum]);
    answer.push(ranking[correctNum]);
    
    return answer;
}