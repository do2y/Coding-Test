function solution(park, routes) {
    const parkGrid = park.map(row => row.split(""));

    let row = parkGrid.findIndex(row => row.includes("S"));
    let col = parkGrid[row].indexOf("S");

    const directions = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    };

    routes.forEach(route => {
        const [direction, distance] = route.split(" ");
        const [r, c] = directions[direction];

        const targetRow = row + Number(distance) * r;
        const targetCol = col + Number(distance) * c;

        if (
            targetRow < 0 ||
            targetRow >= parkGrid.length ||
            targetCol < 0 ||
            targetCol >= parkGrid[0].length
        ) return;

        let nextRow = row;
        let nextCol = col;
        let canMove = true;

        for (let i = 0; i < Number(distance); i++) {
            nextRow += r;
            nextCol += c;

            if (parkGrid[nextRow][nextCol] === "X") {
                canMove = false;
                break;
            }
        }

        if (canMove) {
            row = nextRow;
            col = nextCol;
        }
    });

    return [row, col];
}