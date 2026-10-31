function solution(n) {
    const sortedStr = String(n)
        .split("")
        .sort((a, b) => b - a)
        .join("");

    return Number(sortedStr);
}