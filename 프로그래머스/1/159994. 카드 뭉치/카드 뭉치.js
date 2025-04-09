function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    let correct = 0;

    for(let word of goal){
        if(cards1[idx1] === word){
            idx1++; correct++;
        }
        else if(cards2[idx2] === word){
            idx2++; correct++;
        }
        else {
            idx1++; idx2++;
        }
            
    }

    return correct == goal.length ? "Yes" : "No";
}
