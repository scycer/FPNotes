// Monad
// Examples are List, Either, Maybe, Task, Box

// # Rule 1 - has .of() method (also called pure)
// Puts a value into the successful part of a type (e.g. the 'Right' of an 'Either')

// ## Examples
//     Maybe.of(x) -> Just(x)

//     Either.of(x) -> Right(x)

//     Task.of(x) -> Task((rej, res) => res(x))

//     List.of(x,y) -> List(x,y)

// # Rule 2 - has .chain() method (alias: flatMap, bind, >>=)
// Use - join 2 types together (same types)
// Using the value within its context, a function is applied to it that returns the same type as what .chain() was applied to
// Also can be refered to as flattening the nested type into it's parent type (i.e. from Task(Task()) -> Task())
// Not the same as Task.fork(e => e, s => Task(s)) as the first task will be run and cannot be lazy evaluated with a later fork
// Used for sequential things, so the error from the first task would cause a skip of the second task and just bubble up the error to whoever calls .fork()

// ## Examples
// Simplifies this:
//     Task
//       .map(x => new Task(x))
//       .fork(x =>
//          x.fork(e => e, s => s)
//          , s => s)
//  To this:
//     Task
//       .chain(x => new Task(x))
//       .fork(e => e, s => s)


// Law - join
// const m = Box(Box(Box(5)))
// const join = monad => monad.chain(x => x)

// join(m.map(join)) === 5 -- Joining inward out
// join(join(m)) === 5 -- Joining outward in

// .map() === .chain(.of())
// Box(1).map(x => x + 1)           === Box(2)
// Box(1).chain(x => Box.of(x + 1)) === Box(2)

// Monad is a Functor (because it can implement map)