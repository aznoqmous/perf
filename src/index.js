import Perf from "./perf"

let immediateStart, immediateTimeout, immediate, immediateCount

function setImmediate(callback, timeout=1000){
    immediateStart = performance.now()
    immediateTimeout = timeout
    immediate = callback
    immediateCount = 0
    
    return new Promise(res => {
        let immediateLoop = (e)=>{
            if(
                e.data == 'immediate' 
                && immediate
            ) {
                if(performance.now() - immediateStart < immediateTimeout){
                    immediate()
                    immediateCount++
                    window.postMessage('immediate')
                }
                else {
                    res(immediateCount)
                    window.removeEventListener('message', immediateLoop)
                }
            }
        }
        window.addEventListener('message', immediateLoop)
        window.postMessage('immediate')
    })
}

let perf = new Perf()
setImmediate(()=>{
    perf.startTimer('blocking')
    let i = 0
    while(i < 1000){
        i++;
    }
    perf.endTimer('blocking')
})
.then(()=>{
    let timer = perf.getTimer('blocking')
    output.innerHTML = `<ul>
        <li><strong>iterations</strong>&nbsp;<span>${timer.count}</span></li>
        <li><strong>average loop duration</strong>&nbsp;<span>${timer.average}ms</span></li>
    </ul>`
})