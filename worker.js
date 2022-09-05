var runningWorkers = []
self.onmessage = function(n) {
    console.log('worker called', n)
    if (n.data === 'CLOSE') {
        self.close()
        console.warn('CLOSED')
        return
    }
    let startTask = () => {
        runningWorkers.push(new Worker('sub-worker.js'))
        const task = 'RUN_' + runningWorkers.length
        runningWorkers[runningWorkers.length - 1].postMessage(task)
        console.log(task, 'started')
    }
    if (n.data === 'RUN_TASK') {
        startTask()
        startTask()
        startTask()        
    }   
};
