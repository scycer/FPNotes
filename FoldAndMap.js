// Fold - to remove from it's context
// Box(3).fold === 3
// List(1,2,3).fold === 6

// Map - to apply a function again context and get that same context back (like array.map returns the same size array)
// const addOne = x => x + 1
// [1,2,3].map(addOne) === [2,3,4]
// List(1,2,3).map(addOne) === List(2,3,4)

// This can also be seen as
// applying 'addOne' function - [1] maps to [2]

// The addition symbol can be seen as a function applied to a pair of numbers
// + :: Number -> Number -> Number
// the '+' symbol takes a number and a number, adds them together and gives another number


// foldMap - to apply a function to a context, then remove it from it's context
// const addOne = x => x + 1

// List(1,2,3)
//  .map(addOne) === List(2,3,4)
//  .fold([]) === 9 -- List uses a reduce function to remove it from from itself, this varies between types (see box) 