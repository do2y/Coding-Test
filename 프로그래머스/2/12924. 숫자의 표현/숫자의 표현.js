function solution(n) {
    let result = 0;

    for (let num = 1; num <= n; num++) {
        let sum = 0;
        let current = num;

        while (sum < n) {
            sum += current;
            current++;
        }

        if (sum === n) result++;
    }

    return result;
}