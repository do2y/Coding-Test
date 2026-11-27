function solution(genres, plays) {
    
    const answer = [];
    const playCountDict = {};

    genres.forEach((v, i) => {
        if (!playCountDict[v]) {
            playCountDict[v] = {
                total: 0,
                songs: []
            };
        }

        playCountDict[v].total += plays[i];
        playCountDict[v].songs.push(i);
    });

    const sortedGenreCount = Object.entries(playCountDict)
        .sort((a, b) => b[1].total - a[1].total);

    for (const [genre, data] of sortedGenreCount) {
        const sortedPlaysInGenre = data.songs
            .sort((a, b) => plays[b] - plays[a] || a - b);

        answer.push(...sortedPlaysInGenre.slice(0, 2));
    }

    return answer;
}
