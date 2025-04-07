function solution(ingredient) {
    let answer = 0;
    let stack = [];
    let hamburger = "1231";
    
    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            let lastFour = stack.slice(-4).join("");
            if (lastFour === hamburger) {
                stack.splice(-4);
                answer++;
            }
        }
    }

    return answer;
}