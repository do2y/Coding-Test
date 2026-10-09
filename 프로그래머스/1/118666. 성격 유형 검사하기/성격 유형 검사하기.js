function solution(survey, choices) {
    // RT, CF, JM, AN - 비/동
    // 점수가 동일하다면 사전순으로 빠른 거
    
    const typePairs = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"]
    ];
    
    const typeScores = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    };
    
    const choiceScores = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3
    };
    
    let answer = "";
    
    survey.forEach((response, i) => {
        let [first, second] = response.split("");
        let score = choiceScores[choices[i]];   
        
        if (choices[i] <= 3) typeScores[first] += score;
        else typeScores[second] += score;
    });
    
    for (const [first, second] of typePairs) {
        let firstScore = typeScores[first];
        let secondScore = typeScores[second];
        
        if (firstScore >= secondScore) answer += first;
        else answer += second;
    }
    
    return answer;
}