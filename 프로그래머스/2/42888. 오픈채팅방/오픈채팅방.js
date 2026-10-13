function solution(record) {
    const nicknameMap = new Map();

    const records = record.map(line => line.split(" "));

    records.forEach(([status, id, nickname]) => {
        if (status === "Enter" || status === "Change")
            nicknameMap.set(id, nickname);
    });

    const result = [];

    records.forEach(([status, id]) => {
        const nickname = nicknameMap.get(id);

        if (status === "Enter")
            result.push(`${nickname}님이 들어왔습니다.`);
        else if (status === "Leave")
            result.push(`${nickname}님이 나갔습니다.`);
    });

    return result;
}