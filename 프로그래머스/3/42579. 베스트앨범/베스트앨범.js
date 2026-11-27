function solution(genres, plays) {
 
    const answer = [];
    
    const playCountDict = {};
    
    genres.forEach((v, i) => {
        playCountDict[v] = (playCountDict[v] || 0) + plays[i];
    });
    
    const sortedGenreCount = Object.entries(playCountDict).sort((a,b) =>  b[1] - a[1]);
    
    for (const [genre, _] of sortedGenreCount) {
        const playsInGenre = [];
        
        for (let i=0; i<genres.length; i++) {
            if (genres[i] === genre) {
                playsInGenre.push(i);
            }
        }
        
        const sortedPlaysInGenre = playsInGenre.sort((a,b) => plays[b] - plays[a]);
        answer.push(...sortedPlaysInGenre.slice(0, 2));
    
    }

    return answer;
}