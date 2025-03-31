function solution(s) {
    let answer = 0;
    let same = 0, diff = 0;
    let start;

    for (let i = 0; i < s.length; i++) {
        if (same === 0 && diff === 0) start = s[i]; 

        if (s[i] === start) same++;
        else diff++;

        if (same === diff) {
            answer++;
            same = 0;
            diff = 0;
        }
    }

    if (same !== 0 || diff !== 0) answer++;

    return answer;
}
