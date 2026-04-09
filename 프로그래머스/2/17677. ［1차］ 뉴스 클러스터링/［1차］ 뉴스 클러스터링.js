function solution(str1, str2) {
    let answer = 0;
    let jaccardSimilarity = 1;
    
    let [set1, set2] = makeSet(str1, str2);
    
    if (set1.length !== 0 || set2.length !== 0) {
        let [set1CountDict, set2CountDict] = countWord(set1, set2);
        let [intersectCount, unionCount] = countSet(set1CountDict, set2CountDict);
        jaccardSimilarity = intersectCount / unionCount;
    }
    
    return Math.trunc(jaccardSimilarity * 65536);
}

function makeSet(str1, str2) {
    const set1 = [];
    const set2 = [];
    
    let eng = /^[a-zA-Z]{2}$/;
    let ch;
    
    for (let i=0; i<str1.length - 1; i++) {
        ch = str1[i] + str1[i+1];
        if (eng.test(ch))
            set1.push(ch.toUpperCase());
    }
    
    for (let i=0; i<str2.length - 1; i++) {
        ch = str2[i] + str2[i+1];
        if (eng.test(ch))
            set2.push(ch.toUpperCase());
    }
    return [set1, set2];
}

function countWord(set1, set2) {
    const set1CountDict = {};
    const set2CountDict = {};
    set1.forEach(ch => {
        set1CountDict[ch] = (set1CountDict[ch] || 0) + 1; 
    });
    
    set2.forEach(ch => {
        set2CountDict[ch] = (set2CountDict[ch] || 0) + 1; 
    });
    
    return [set1CountDict, set2CountDict];
}

function countSet(countDict1, countDict2) {
    let intersectCount = 0;
    let unionCount = 0;
    
    for (let key in countDict1) {
        if (countDict2[key]) {
            intersectCount += Math.min(countDict1[key], countDict2[key]);
            unionCount += Math.max(countDict1[key], countDict2[key]);
        } else {
            unionCount += countDict1[key];
        }
    }
    for (let key in countDict2) {
        if (!countDict1[key]) unionCount += countDict2[key];
    }
    
    return [intersectCount, unionCount];
}




