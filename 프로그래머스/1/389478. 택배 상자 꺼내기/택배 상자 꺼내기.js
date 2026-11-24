function solution(n, w, num) {
    let removeCount = 0;
    let current = num;

    while (current <= n) {
        const rowEnd = Math.ceil(current / w) * w;
        const distanceToRowEnd = rowEnd - current;

        removeCount++;
        current += distanceToRowEnd * 2 + 1;
    }

    return removeCount;
}