import Utils from "./utils"

export default class Timer {

    constructor(key, bufferSize){
        this.key = key
        this.minValue = null
        this.maxValue = null
        this.color = Utils.getRandomColor()
        this.buffer = []
        this.bufferSize = bufferSize
        this.count = 0
        this.statT = 0
    }

    start(){
        this.startT = performance.now()
    }

    stop(){
        this.time = performance.now() - this.startT
        this.count++

        if(typeof this.minValue === 'undefined') this.minValue = this.time
        if(typeof this.maxValue === 'undefined') this.maxValue = this.time
        if(this.minValue > this.time) this.minValue = this.time
        if(this.maxValue < this.time) this.maxValue = this.time

        this.buffer.push(this.time)
        if(this.buffer.length > this.bufferSize) this.buffer.shift()
    }

    get average(){
        let total = 0
        this.buffer.map(v => total += v)
        return total / this.buffer.length
    }

}