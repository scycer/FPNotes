const Box = x => ({
  map: f => Box(f(x)),
  show: () => `Box(${x})`, // Also 'Inspect'
  fold: f => f(x),
  ap: y => y.map(x),
  chain: f => f(x),
  of: x => Box(x)
})
// Useful to partially apply arguments to a function in a type
// -------
// Rule
// F(x).map(f) == F(f).ap(F(x))
// -------
// Example
// const addOne = x => x + 1
// Box(addOne).ap(Box(2)) === Box(2).map(addOne)
// -------
const add = x => y => x + y
// Applicative functor -- Built Sequentially, Run Concurrently
// Box(add).ap(Box(1)).ap(Box(2)) === Box(3)
// Functor -- Built Sequentially, Run Sequentially
// Box(1)
//     .chain(x => Box(2)
//         .map(y => add(x)(y))) === Box(3)
// Applicative functor alternative -- Built Concurrently, Run Concurrently
// const liftA2 = (f, fx, fy) => fx.map(f).ap(fy)
// liftA2(add, Box(1), Box(2)) === Box(3)
// IN ENGLISH: Get 'fx' and apply f to it, returning a partially application function, then apply a final argue to the returned function
// Use .ap() for concurrent where the result of 1 doesn't feed into the 2 (get all Users and get all Posts)
// Use .chain() for sequential where the result of 1 needs to feed into 2 (get User and posts of those users)
