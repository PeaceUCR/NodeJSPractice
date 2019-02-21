# How to run,
node + filename

i.e. "node app"

#How node requirejs , module.exports works?
https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3509218?start=0
https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3485580?start=375
https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3560172?start=0

if js file content
  
    var greet = function(){
        console.log('Hello!');
    };
    
    module.exports = greet;

then wrapped into

![alt text](https://raw.githubusercontent.com/PeaceUCR/NodeJSPractice/master/wrap.png)

note: require('') involved cache to return.... the import module may not execute twice even you require twice, refer to **callModule.js**, and changes in previous require return will affect the next return, obj1 change will cause the obj2 change as well

#Async Code and event loop
JS is synchronous&single-threaded, NodeJS is async(libuv non-blocking/async I/O)
https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3586868?start=0

**Understand Event loop**
http://cek.io/blog/2015/12/03/event-loop/
https://blog.risingstack.com/node-hero-async-programming-in-node-js/
https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0



https://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm
https://www.tutorialspoint.com/nodejs/nodejs_interview_questions.htm
**offical doces**
https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

**How nodejs handle multiple requests at one time**
search google.... tobe continued





