function solution(record) {
   
    let nicknameMap = new Map();
    let result = [];
    let answer = [];
    
    for(let i=0; i<record.length; i++) {
        let [action, id, nickname] = record[i].split(" ");
        
        if (action === "Enter" || action === "Change") {
            nicknameMap.set(id, nickname);
        }
        
        if (action === "Change") continue;
        result.push([action , id]);
    }
    
    for (let i=0; i<result.length; i++) {
        let [action, id] = result[i];
        let nickname = nicknameMap.get(id);
        
        if (action === "Enter") 
            answer.push(`${nickname}님이 들어왔습니다.`);
        if (action === "Leave") 
            answer.push(`${nickname}님이 나갔습니다.`);
    }
    
    return answer;
}