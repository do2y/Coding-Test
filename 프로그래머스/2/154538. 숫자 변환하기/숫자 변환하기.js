function solution(x, y, n) {
    // x에서 숫자 y까지 도달하는 최소 연산 횟수
    const dp = Array(y + 1).fill(Infinity);

    dp[x] = 0;

    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue;

        if (i+n <= y) {
            dp[i+n] = Math.min(dp[i+n], dp[i]+1);
        }

        if (i*2 <= y) {
            dp[i*2] = Math.min(dp[i*2], dp[i]+1);
        }

        if (i*3 <= y) {
            dp[i*3] = Math.min(dp[i*3], dp[i]+1);
        }
    }

    return dp[y] === Infinity ? -1 : dp[y];
}