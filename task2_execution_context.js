console.log("task2_execution_context.js")
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
    and in new execution context again momery creation fase will started first
    then code execution will be started.
        if variables added directly like in lexical scope or in global scope if 
        their is variable a as var a and if we created var a=60; an new variable
        for only this execution context or scope will be created and the value 
        of global variable a will remain same as it was.

        even if we created var ans in function scope as var we con't access it
        outside the function scope.
        
        if we want to access it outside function we need to initialise outside
        and then change its value in function so we can access outside function
        
        but if we directly said a=60; this will change value of var a at global
        space.
    returned value will be then given back to the global momery component 
    and stored.
    whole new execution content of function will be deleted.

Call Stack / Execution context stack / Program stack / Control stack
Runtime stack / Machine Stack
    at bottom global execution context is at bottom of call stack.
    if another execution context is created it will be pushed in call stack.
    and after execution it will be deleted from call stack

*/