// console.log("rahul")
/*
How javascript works ?
Is javascript syncronous or asynchronous ?
Is javascript single threaded or multithreaded ?

1. Everything in javascript happens inside execution context.
    we can assume execution context as a box under which whole code
    will be execuited.
2. Execution context has two parts(components).
    memory component / variable environment
    code component / Thread of execution
3. Javascript is synchronous single-threaded language.

*/ 
/*
What happens when you run javascript code ?

when you run a code a global execution context is created.
it is created in two fases 

Momery cretion fase.
    in this fase javascript will allocates momery to variable and functions
        for variables it will store value as undefined
        for function it will store whole function code as a value.
Code execution fase.
    now for variables it will replace undefined with its actual value in the
    code
    when we will call a function a whole new execution context will be created.
    and whole fases will again happen.
    returned value will be then given back to the global momery component 
    and stored.
    whole new execution content of function will be deleted.

Call Stack / Execution context stack / Program stack / Control stack
Runtime stack / Machine Stack
    at bottom global execution context is at bottom of call stack.
    if another execution context is created it will be pushed in call stack.
    and after execution it will be deleted from call stack

*/