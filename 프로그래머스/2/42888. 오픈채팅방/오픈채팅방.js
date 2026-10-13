function solution(record) {
   
    const nicknameMap = new Map();
    
    record.forEach(line =>{
        const [status, id, nickname] = line.split(" ");

        if (status === "Enter" || status === "Change")
            nicknameMap.set(id, nickname);
        
    });
    
    const result = [];
    record.forEach(line => {
        const [status, id] = line.split(" ");
        
        const nickname = nicknameMap.get(id);
        
        if (status === "Enter")
            result.push(`${nickname}님이 들어왔습니다.`);
        else if (status === "Leave")
            result.push(`${nickname}님이 나갔습니다.`);
    });
    
    return result;
    
}
