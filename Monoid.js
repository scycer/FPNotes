// Monoid laws

// Semigroup + neutral element (i.e. Identity or 'Empty')

// Example
const arrayId = []
const addOperatorId = 0
const multiplyOperatorId = 1
const booleanId = true
// [1, 2, 3].concat(arrayId)) === [1,2,3]
// 1 + addOperatorId === 1
// 3 * multiplyOperatorId === 3
// false && booleanId === false
// true && booleanId === true
// Why? Fail-safe combination - Useful for reduce/fold method method because it's always safe (always returns a value even with 0 values)
// [[1,2,3],[4,5,6]]    .reduce((acc, x) => acc.concat(x),  arrayId)        === [1,2,3,4,5,6]
// [1,2,3]              .reduce((acc, x) => acc + x,        addOperatorId)  === 6
// When is a semigroup not also a monoid? When you cannot specify an identity (using 'First' as an example)
