// Semigroup laws

// Associativity - A type with a concat method - like array or Number
// It doesn't matter which order you concat them as long 
// as they are concatted in the same sequenence

// 1 + ( 2 + 3 ) === (1 + 2) + 3  
 

// ([1, 2].concat([3, 4]))
//  .concat([5, 6])

// Is the same as

// [1, 2].concat(
//  ([3, 4]).concat([5, 6]))
