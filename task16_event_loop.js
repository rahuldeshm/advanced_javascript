// Event loop //
/*
as we know while using javascript in browser if we have many components like 
console, call stack, local storage, thread, event queues, timeout functions,
and others

javascript is single threaded language and so it can perform only one line
of code at a time

but if we are using time out that doesent mean this timeout function remain
in call stack till timeout ends so 

at this time it will go somewhere in momery and after defined time it will 
enter in event queue and it will go to call stack after call stack is empty 
till then it will remian in queue.

this is how it work in javascript and this loop of entering events in call 
stack is known as EVENT LOOP

// Call Stack //
    All the code inside js is executed inside callstack.
    when any code is executed global execution context is created and this
    global execution context is pushed inside call stack.
    when a function is get called again a execution context is created and 
    this execution context is again pushed in callstack
    after the execution of this function the execution context is deleted 
    from callstack.
    ans after complition of all code the global execution context will also
    popped out of this callstack.
    main job of the call stack is to execute if something comes inside 
    callstack.
    callstack is inside a javascript engine.
// Event Queue // task queue.
    when the time expires function in callback will go t event queue.
// Microtask Queue //
    starvation//
    this will work same as event queue but this queue will get priority.
    all the functions came from promices will go in microtask queue.
    muta
// Event Loop //
    moniters call stack and callback queue.
    event loop checks the callstack is empty or not.
    if emptuy it will send first element in queue to call stack
    if not empty it will wait till it become empty.
// Web API's // this is browsers things.
=> location
=> https:
=> LOCAL STORAGE
=> CONSOLE
=> FETCH
=> DOM API's
=> setTimeout's
*/
console.log("start");// --> this will make call to console of web api.
setTimeout(() => { // --> this also calls settimeout().
    console.log("Callback"); 
}, 5000);
fetch("https://api.netflix.com")
    .then(() => console.log("cb netflix"))
console.log("End")

// FETCH // goes and request api call.
            // returns a Promise
