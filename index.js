const fs = require('fs');
const http = require('http');

const logger = ()=>{
    console.log('settimeout logger');
}
const logger2 = ()=>{
    console.log('setimmidate logger');
}
setTimeout(logger, 100);
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 1');
})
http.get('http://topsystem.com', (res)=>{
    if(res){
        console.log('http here...')
    }
})
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 2');
})
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 3');
})
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 4');
})
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 5');
})
setImmediate(logger2);
