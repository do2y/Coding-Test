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
    
        let nextRow = row;
        let nextCol = col;
        let flag = true;
    
        if (parkGrid.length - 1 < nextRow + distance * r 
            || parkGrid[0].length - 1 < nextCol + distance * c) return;
        
        if (nextRow + distance * r < 0
            || nextCol + distance * c < 0) return;
        
        for (let i=0; i<distance; i++) {
            nextRow += r;
            nextCol += c;
            
            if (parkGrid[nextRow] === "X" || parkGrid[nextRow][nextCol] === "X") {
                flag = false;
                nextRow = row;
                nextCol = col;
                break;
            }
        }
         
        if (flag && parkGrid.length > nextRow && parkGrid[0].length > nextCol) {
            row = nextRow;
            col = nextCol;
        }
        
    });
    
    return [row, col];
    
}