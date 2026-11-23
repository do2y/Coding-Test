function solution(wallpaper) {
    let x1 = Infinity;
    let y1 = Infinity;
    let x2 = -Infinity;
    let y2 = -Infinity;

    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === "#") {
                x1 = Math.min(x1, i);
                y1 = Math.min(y1, j);
                x2 = Math.max(x2, i);
                y2 = Math.max(y2, j);
            }
        }
    }

    return [x1, y1, x2 + 1, y2 + 1];
}