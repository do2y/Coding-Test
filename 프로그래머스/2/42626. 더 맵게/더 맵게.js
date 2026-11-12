function solution(scoville, K) {

    // [최소힙 구현]
    // 루트가 k값 미만이라면 pop (트리 재구성) -> 또 pop해서 두번째 작은 값 꺼내 두 스코빌을 섞은 다음 push
    // 이걸 반복
    
    const heap = [];
    function push(value) {
        heap.push(value);
        let idx = heap.length - 1;
    
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            
            if (heap[parent] <= value) break;
    
            [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
            idx = parent;
        }
    
    }

    function pop() {
        if (heap.length === 0) return undefined;
        if (heap.length === 1) return heap.pop();
        
        let min = heap[0];
        heap[0] = heap.pop();   
        let idx = 0; //삽입된 요소를 추적
        
        //left, right를 비교해서 bubble down.
        while(true) {
            const left = idx * 2 + 1;
            const right = idx * 2 + 2;
            let smallest = idx;  //더 작은 값을 추적
            
            if (left < heap.length && heap[left] < heap[idx])
                smallest = left;
            if (right < heap.length && heap[right] < heap[smallest])
                smallest = right;
            
            if (smallest === idx) break;
            
            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
            idx = smallest;
        }
       
        return min;
    }
    
    for (const v of scoville) {
        push(v);
    }
    
    let mixCount = 0;
    while (heap[0] < K) {
        const root = pop();
        const second = pop();
        if (second === undefined) return -1;
        
        const newFood = root + second * 2;
        mixCount++;
        push(newFood);
    }
    
    return mixCount;
    
}


