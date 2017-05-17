// Has a map method

// Law 1 - Preserves function composition
// i.e.run each function individually using multiple maps vs compose functions then run map once

// fx.map(f).map(g) = fx.map(x => g(f(x)))

const addOne = x => x + 1
const multiplyByTwo = x => x * 2
// [1]
//     .map(addOne)
//     .map(multiplyByTwo)
// is the same as ('===')
// [1]
//     .map( multiplyByTwo( addOne() ) )
// Array is an example of a functor obeying this law
// [1,2,3]  .map( addOne ).map( multiplyByTwo ) === [4,6,8]
// [1,2,3]  .map(x => multiplyByTwo( addOne(x) )  === [4,6,8]
// Law 2 - fx.map(id) == id(fx)
// i.e. Mapping the value in fx through id is the same as applying id to fx
// id = x => x
// Array is an example of a functor obeying this law
// [1,2,3].map(id) === [1,2,3]
// id([1,2,3]) === [1,2,3]
