function solution(friends, gifts) {
  /*둘 사이에 선물 주고받은 횟수를 알아야함..
      => 적게 준 사람이 선물해야함ㅁ
            => 근데 기록이 없거나 같으면 선물 지수를 구하고 선물 지수가 작은 사람이 줘야함.
            선물 지수 = 선물 준수 - 받은 수
    */
 
    const history = {};
    const givenCount = {};
    const receivedCount = {};
    
    
  friends.forEach((friend) => {
      history[friend] = {};
      givenCount[friend] = 0;
      receivedCount[friend] = 0;
  });
    
    gifts.forEach((record) => {
        const [giver, receiver] = record.split(" ");
        
        history[giver][receiver] =
            (history[giver][receiver] ?? 0) + 1;
        givenCount[giver]++;
        receivedCount[receiver]++;
    });
    
    const giftIndex = {};
    const nextReceive = {};
    
    friends.forEach((friend) => {
        giftIndex[friend] = givenCount[friend] - receivedCount[friend];
        nextReceive[friend] = 0;
    });
    
    for (let i=0; i<friends.length; i++) {
        for (let j=i+1; j<friends.length; j++){
            const a = friends[i];
            const b = friends[j];
            
            const aToB = history[a][b] ?? 0;
            const bToA = history[b][a] ?? 0;
            
            if (aToB > bToA) {
                nextReceive[a]++;
            } else if (aToB < bToA) {
                nextReceive[b]++;
            } else {
                if (giftIndex[a] > giftIndex[b]) {
                    nextReceive[a]++;
                } else if (giftIndex[a] < giftIndex[b]) {
                    nextReceive[b]++;
                }
            }
        }
    }

    return Math.max(...Object.values(nextReceive));
    
}