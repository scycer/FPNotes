// Either = Right || Left

const Right = x => ({
  map: f => Right(f(x)),
  show: () => `Right(${x})`, // Also 'Inspect'
  fold: (f, g) => g(x)
})

const Left = x => ({
  map: f => Left(x),
  show: () => `Left(${x})`, // Also 'Inspect'
  fold: (f, g) => f(x)
})

// findColor :: String -> Either(null || String)
const findColor = color => {
  const found = { red: '#ff4444', blue: '#3b5998' }[color]
  return found ? Right(found) : Left(null)
}

console.log(findColor('red').show())
console.log(findColor('green').show())

console.log(
  findColor('red')
    .map(c => c.slice(1))
    .map(c => c.toUpperCase())
    .fold(x => 'No Color Found', x => x)
)
// FF4444

console.log(
  findColor('green')
    .map(c => c.slice(1))
    .map(c => c.toUpperCase())
    .fold(x => 'No Color Found', x => x)
)
// 'No Color Found'
