function solution(wallpaper) {
    
    let x1; let y1;
    let x2; let y2;
    
    for (let i=0; i<wallpaper.length; i++) {
        for (let j=0; j<wallpaper[0].length; j++) {
            if (wallpaper[i][j] === "#") {
                
                if (x1 === undefined) {
                    x1 = i; y1 = j;
                }
                y1 = Math.min(y1, j);
                
                if (x2 === undefined) {
                    x2 = i; y2 = j;
                }
                
                x2 = Math.max(x2, i);
                y2 = Math.max(y2, j);
            }
        }
    }
    
    return [x1, y1, x2+1, y2+1];

}