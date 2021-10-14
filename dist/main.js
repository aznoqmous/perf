!function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);class r{constructor(t,e){this.key=t,this.minValue=null,this.maxValue=null,this.color=class{static getRandomColor(){return`hsl(${Math.floor(360*Math.random())}deg, 50%, 50%)`}}.getRandomColor(),this.buffer=[],this.bufferSize=e,this.count=0,this.statT=0}start(){this.startT=performance.now()}stop(){this.time=performance.now()-this.startT,this.count++,void 0===this.minValue&&(this.minValue=this.time),void 0===this.maxValue&&(this.maxValue=this.time),this.minValue>this.time&&(this.minValue=this.time),this.maxValue<this.time&&(this.maxValue=this.time),this.buffer.push(this.time),this.buffer.length>this.bufferSize&&this.buffer.shift()}get average(){let t=0;return this.buffer.map(e=>t+=e),t/this.buffer.length}}let n,s,o,a;let u=new class{constructor(t={}){this.opts=Object.assign({bufferSize:255},t),this.timers={},window["__"+this.constructor.name]=this}getTimer(t){return this.timers[t]||(this.timers[t]=new r(t,this.opts.bufferSize)),this.timers[t]}startTimer(t){this.getTimer(t).start()}endTimer(t){this.getTimer(t).stop()}static getInstance(){return window["__"+this.name]}static setImmediate(t){}};(function(t,e=1e3){return n=performance.now(),s=e,o=t,a=0,new Promise(t=>{let e=i=>{"immediate"==i.data&&o&&(performance.now()-n<s?(o(),a++,window.postMessage("immediate")):(t(a),window.removeEventListener("message",e)))};window.addEventListener("message",e),window.postMessage("immediate")})})(()=>{u.startTimer("blocking");let t=0;for(;t<1e3;)t++;u.endTimer("blocking")}).then(()=>{let t=u.getTimer("blocking");output.innerHTML=`<ul>\n        <li><strong>iterations</strong>&nbsp;<span>${t.count}</span></li>\n        <li><strong>average loop duration</strong>&nbsp;<span>${t.average}ms</span></li>\n    </ul>`})}]);