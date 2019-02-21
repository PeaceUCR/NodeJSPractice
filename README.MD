# How to run,
node + filename

i.e. "node app"

# How node requirejs , module.exports works?
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

note: require('') involved **cache** to return.... the import module may not execute twice even you require twice, refer to **callModule.js**, and changes in previous require return will affect the next return, obj1 change will cause the obj2 change as well

#Async Code and event loop
JS is synchronous&single-threaded, NodeJS is async(libuv non-blocking/async I/O)

https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3586868?start=0

# Understand Event loop
http://cek.io/blog/2015/12/03/event-loop/

https://blog.risingstack.com/node-hero-async-programming-in-node-js/

https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0

![alt text](http://cek.io/images/event-loop/loupe.gif)


https://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm

https://www.tutorialspoint.com/nodejs/nodejs_interview_questions.htm

**offical doces**

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

at the end of this doc
https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
![alt text](https://github.com/PeaceUCR/NodeJSPractice/blob/master/threads.png?raw=true)

**How nodejs handle multiple requests at one time?**

https://stackoverflow.com/questions/36542404/node-js-server-with-multiple-concurrent-requests-how-does-it-work

https://stackoverflow.com/questions/29220878/how-does-node-js-handle-simultaneous-requests-with-one-thread

https://stackoverflow.com/questions/14189496/thread-in-an-event-driven-vs-non-event-driven-web-server





