// Maybe = Just || Nothing

const Just = x => ({
  map: f => Just(f(x)),
  chain: f => f(x),
  show: () => `Just(${x})`, // Also 'Inspect'
  fold: (f, g) => g(x)
})

const Nothing = x => ({
  map: f => Nothing(x),
  chain: f => Nothing(x),
  show: () => `Nothing`, // Also 'Inspect'
  fold: (f, g) => f
})

// findColor :: String -> Either(null || String)
const findColor = color => {
  const found = { red: '#ff4444', blue: '#3b5998' }[color]
  return found ? Just(found) : Nothing()
}

console.log(findColor('red').show())
console.log(findColor('green').show())

console.log(
  findColor('red')
    .map(c => c.slice(1))
    .map(c => c.toUpperCase())
    .fold('No Color Found', x => x)
)
// FF4444

console.log(
  findColor('green')
    .map(c => c.slice(1))
    .map(c => c.toUpperCase())
    .fold('No Color Found', x => x)
)
// 'No Color Found'
