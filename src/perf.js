import Timer from "./timer"

export default class Perf {

    constructor(opts={}){
        this.opts = Object.assign({
            bufferSize: 255 // max data kept by timers
        }, opts)
        this.timers = {}
        window[`__${this.constructor.name}`] = this
    }

    getTimer(key){
        if(!this.timers[key]) this.timers[key] = new Timer(key, this.opts.bufferSize)
        return this.timers[key]
    }

    startTimer(key){
        let timer = this.getTimer(key)
        timer.start()
    }

    endTimer(key){
        let timer = this.getTimer(key)
        timer.stop()
    }

    static getInstance(){
        return window[`__${this.name}`]
    }

    static setImmediate(callback){

    }

}