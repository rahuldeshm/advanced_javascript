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

*/