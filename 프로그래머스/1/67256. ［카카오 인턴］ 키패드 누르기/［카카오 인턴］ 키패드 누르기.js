function solution(numbers, hand) {
    const leftPossible = [1, 4, 7];
    const rightPossible = [3, 6, 9];

    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        "*": [3, 0], 0: [3, 1], "#": [3, 2]
    };

    let result = "";
    let left = "*";
    let right = "#";

    function getDistance(from, to) {
        const [x1, y1] = keypad[from];
        const [x2, y2] = keypad[to];

        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    for (const num of numbers) {
        if (leftPossible.includes(num)) {
            result += "L";
            left = num;
        }
        else if (rightPossible.includes(num)) {
            result += "R";
            right = num;
        }
        else {
            const leftDist = getDistance(left, num);
            const rightDist = getDistance(right, num);

            if (leftDist < rightDist) {
                result += "L";
                left = num;
            }
            else if (leftDist > rightDist) {
                result += "R";
                right = num;
            }
            else {
                if (hand === "right") {
                    result += "R";
                    right = num;
                }
                else {
                    result += "L";
                    left = num;
                }
            }
        }
    }

    return result;
}