## Orders
Where a relationship between 2 objects is less than or equal to (<=)
It is a category because it is:
- Composition (a <= b, b <= c so a <= c)
- has id (because it is equal to itself)
This is called a *preorder*

partial order: above rules & if a <= b and b <= a then they are equal
total/linear order: above rules & if there is always a relationship between any 2 objects

Orders are important to identify because they affect the types of sorting that can be done

## Monoid
+ and * both form a Monoids
- must have a special element that is a unit which is a neutral element, like a 0 in addition
- must be associative i.e. a + (b + c) === (a + b) + c

String example of it being a Monoid
- empty = ''
- append = x.concat(y)

Addition example of it being a Monoid
- empty = 0
- append = x + y

Division example of it being a Monoid
- empty = 1
- append = x / y

Subraction example of it being a Monoid
- empty = 0
- append = x - y

## Poset - Partial Order Set
Initial object - first object in the set (Haskel Void)
Terminal object - last object in the set (Haskel Unit, C++ Void)

## Other notes
point vs point-free - shows inputs vs not showing inputs
mappend = (++)
mappend s1 s2 = (++) s1 s2

commutative - if the order of operation doesn't matter (addition is an example, subtration is not)
