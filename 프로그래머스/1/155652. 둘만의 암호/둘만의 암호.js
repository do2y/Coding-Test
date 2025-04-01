function solution(s, skip, index) {
    const skipSet = new Set([...skip].map(chr => chr.charCodeAt()));

    const result = [...s].map(chr => {
        let code = chr.charCodeAt();
        let count = 0;

        while (count < index) {
            code++;
            if (code > 122) code = 97;
            if (!skipSet.has(code)) count++;
        }

        return String.fromCharCode(code);
    });

    return result.join('');
}
