const EventEmitter=require('events')
const print=require('../utility')
class MyEmitter extends EventEmitter{}

const myemitter=new MyEmitter()

myemitter.on('event',()=>{
    print("Event Fired")
})
myemitter.on('received',()=>{
    print("Event Received")
})

myemitter.emit('event')
myemitter.emit('received')
myemitter.emit('received')