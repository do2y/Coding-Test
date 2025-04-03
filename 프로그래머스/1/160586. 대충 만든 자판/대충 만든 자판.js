function solution(keymap, targets) {
    let keyDict = {};
    let answer = [];
    
    keymap.forEach(key => {
        for(let i=0; i<key.length; i++) {
            const chr = key[i];
            const pressCount = i + 1;

            if (keyDict[chr] === undefined || keyDict[chr] > pressCount) {
                keyDict[chr] = pressCount;
            }
        }
    });
    
    targets.forEach(str => {
        let cnt = [...str].reduce((a,c) => a + keyDict[c], 0); 
        cnt ?? null ? answer.push(cnt) : answer.push(-1);
    });

    return answer;
}