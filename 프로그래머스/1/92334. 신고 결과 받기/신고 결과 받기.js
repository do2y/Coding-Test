function solution(id_list, report, k) {
    const reports = {}; 
    const reportedCount = {}; 


    const uniqueReports = new Set(report);

    uniqueReports.forEach(entry => {
        const [from, to] = entry.split(" ");

        if (!reports[from]) reports[from] = new Set();
        reports[from].add(to);

        if (!reportedCount[to]) reportedCount[to] = 0;
        reportedCount[to]++;
    });

    const banned = new Set();
    for (const user in reportedCount) {
        if (reportedCount[user] >= k) {
            banned.add(user);
        }
    }

    return id_list.map(user => {
        let count = 0;
        if (reports[user]) {
            reports[user].forEach(reportedUser => {
                if (banned.has(reportedUser)) {
                    count++;
                }
            });
        }
        return count;
    });
}
