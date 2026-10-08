function solution(id_list, report, k) {
    
    const reportList = {};
    const reportedCount = {};
    
    // 사용자별 신고 목록, 신고 당한 횟수 기록 - 중복 신고 제외
    report.forEach(v => {
        let [from, to] = v.split(" ");
        
        if (!reportList[from]) reportList[from] = new Set();
        
        if (!reportList[from].has(to)) {
            reportList[from].add(to);

            if (!reportedCount[to]) reportedCount[to] = 0;
            reportedCount[to]++;
        }
                       
    });   
    
    // 정지된 사용자 목록 - 신고 횟수 k번 이상
    const bannedUsers = new Set();
    Object.entries(reportedCount).forEach(([user, count]) => {
        if (count >= k) bannedUsers.add(user);
    });
    
    // 신고한 몇명이 정지 당했는지 계산
    return id_list.map(id => {
        let count = 0;
        
        if (reportList[id]) {
            reportList[id].forEach(user => {
                if (bannedUsers.has(user)) count++
            })
        }
        
        return count;
    });
    
    
    
    
    
    
    
}