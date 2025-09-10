function solution(n, words) {
    let usedWords = new Set([words[0]]);  

    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        const curr = words[i];

        if (usedWords.has(curr) || curr.length === 1 || prev.charAt(prev.length - 1) !== curr.charAt(0)) {
            let player = (i % n) + 1;            
            let round = Math.floor(i / n) + 1;   
            return [player, round];
        }

        usedWords.add(curr); 
    }

    return [0, 0];
}
