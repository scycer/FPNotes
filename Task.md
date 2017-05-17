# Promise
A promise generating function

    const gimmiAPromise = () => new Promise(
        (res, rej) => {
            // INSERT ASYNC STUFF HERE!!!
        })

The following runs the promise straight away - no option to chain methods before running it
    
    const evaluatedPromise = gimmiAPromise().then(x => x + 1)

If we want to chain methods without running, we need to wrap it again in a function - e.g. `() =>`
    
    const eagerPromise =       aPromise().then(x => x + 1)
    const lazyPromise =  () => aPromise().then(x => x + 1)

# Task
    const aTask = () => Task(
        (res, rej) => {
            // INSERT ASYNC STUFF HERE!!!
        })

Extending the task is easy with map (use like then for Promise)
    
    const extendedTask = aTask().map(x => x + 1) 

and to run the task:
    
    extendedTask.fold(error => error, success => success) -- sometimes call .fork()

The advantage i see for Task is it's easy to extend the task and delay running it - i.e. Promises are eager, Tasks are Lazy


