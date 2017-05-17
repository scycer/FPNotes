// Box

const Box = x => ({
  map: f => Box(f(x)),
  show: () => `Box(${x})`, // Also 'Inspect'
  fold: f => f(x)
})

console.log(Box(2).show())
console.log(Box(2).map(x => x + 1).show())
console.log(Box(2).fold(x => x + 1))

// Lazy Box - i.e. church encoding - doesn't evaluate until called (fold in this case) - this is how promises and obeservables work

const LazyBox = g => ({
  show: () => `LazyBox(${g})`, // Also 'Inspect'
  fold: f => f(g()),
  map: f => LazyBox(() => f(g()))
})

console.log(
  LazyBox(() => 2)
    .map(x => {
      console.log('ALIVE!!') // ALIVE!!
      return x
    })
    .fold(x => x + 1)
)

console.log(
  LazyBox(() => 2).map(x => {
    console.log('ALIVE!!') // No console log
    return x
  })
  // .fold(x => x + 1)
)
