function solution(record) {
    const answer = [];
    const nicknameMap = new Map();
    
    for (let r of record) {
        const [action, id, nickname] = r.split(" ");

        if (action === "Enter" || action === "Change") {
          nicknameMap.set(id, nickname);
        }
    }

    for (let r of record) {
        const [action, id] = r.split(" ");
        const nickname = nicknameMap.get(id);
        
        if (action === "Enter") answer.push(`${nickname}님이 들어왔습니다.`);
        if (action === "Leave") answer.push(`${nickname}님이 나갔습니다.`);
    }

    return answer;
}