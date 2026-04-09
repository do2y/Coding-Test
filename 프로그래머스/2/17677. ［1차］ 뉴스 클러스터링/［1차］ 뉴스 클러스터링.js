const ENG_REGEX = /^[a-zA-Z]{2}$/;

function solution(str1, str2) {
    const [set1, set2] = makeSet(str1, str2);
    const [freq1, freq2] = countWord(set1, set2);
    
    const [intersectCount, unionCount] = countSet(freq1, freq2);
    
    if (unionCount === 0) return 65536;
    
    return Math.trunc((intersectCount / unionCount) * 65536);
}

function makeSet(str1, str2) {
    const set1 = [];
    const set2 = [];
    
    for (let i = 0; i < str1.length - 1; i++) {
        const ch = str1[i] + str1[i + 1];
        if (ENG_REGEX.test(ch)) set1.push(ch.toUpperCase());
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        const ch = str2[i] + str2[i + 1];
        if (ENG_REGEX.test(ch)) set2.push(ch.toUpperCase());
    }
    
    return [set1, set2];
}

function countWord(set1, set2) {
    const freq1 = {};
    const freq2 = {};
    
    set1.forEach(ch => {
        freq1[ch] = (freq1[ch] || 0) + 1;
    });
    
    set2.forEach(ch => {
        freq2[ch] = (freq2[ch] || 0) + 1;
    });
    
    return [freq1, freq2];
}

function countSet(freq1, freq2) {
    let intersectCount = 0;
    let unionCount = 0;
    
    const keys = new Set([
        ...Object.keys(freq1),
        ...Object.keys(freq2)
    ]);
    
    for (let key of keys) {
        const a = freq1[key] || 0;
        const b = freq2[key] || 0;
        
        intersectCount += Math.min(a, b);
        unionCount += Math.max(a, b);
    }
    
    return [intersectCount, unionCount];
}