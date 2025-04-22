function solution(players, callings) {
    let rank = {};
    players.forEach((runner, i) => {
        rank[runner] = i;
    });

    callings.forEach(call => {
        let idx = rank[call]; 
        if (idx > 0) {
            let frontRunner = players[idx - 1];
         
            players[idx - 1] = call;
            players[idx] = frontRunner;

            rank[call]--;
            rank[frontRunner]++;
        }
    });

    return players;
}
