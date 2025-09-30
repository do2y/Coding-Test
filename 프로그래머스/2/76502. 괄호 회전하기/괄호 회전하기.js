function solution(s) {
    let answer = 0;
    let bracketDict = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let i = 0; i < s.length; i++) {
        let rotated = s.substring(i) + s.substring(0, i);
        
        let stack = [];
        let flag = 1;
        
        for (let ch of rotated) {
            if (bracketDict[ch]) {
                stack.push(ch);
            } else {
                let last = stack.pop();
                if (bracketDict[last] !== ch) {
                    flag = 0;
                    break;
                }
            }
        }
        
        if (flag && stack.length === 0)
            answer++;
    }

    return answer;
}
