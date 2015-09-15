-- Function basics
doubleSmall x = if x > 100
                then x
                else x + x

--lists
let myList = 1:2:3:[]
--[1,2,3] is syntactic sugar for the above
--myList !! 2 will grab 3 from the list
--The lists within a list can be of different lengths but they can't be of different types

head [5,4,3,2,1]
--head returns the first element
tail [5,4,3,2,1]
--tail cuts off the head returns the later elemenst
last [5,4,3,2,1]
--returns last element
init [5,4,3,2,1]
--returns everything but the last element
--cannot use these on empty lists

length [5,4,3,2,1]
--returns length
null [5,4,3,2,1]
--checks if empty
reverse [5,4,3,2,1]
--reverses list

take 3 [5,4,3,2,1]
--takes a number and a list, extracts the number amount of elements from the list
drop 3 [5,4,3,2,1]
--similar to above, but will drop the number from the list
maximum [5,4,3,2,1]
--returns biggest element
minimun [5,4,3,2,1]
--returns smallest element
sum [5,4,3,2,1]
--takes list and returns sum
product [5,4,3,2,1]
--returns product of list
elem 2 [5,4,3,2,1]
--checks to see if the element is in the list

[1..20]
--ranges are the same thing as writing out [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] in short hand.
--['a'..'z'] and ['K'..'Z'] will also work
--be careful with using ranges with floats, floats will never really reach a whole number
--don't use floats in ranges

take 10 (cycle [1,2,3])  
--returns infinitely [1,2,3,1,2,3,1,2,3,1]
--have to slice to make them end

take 10 (repeat 5)
--repeat takes an element and produces an infinite list of just that element. It's like cycling a list with only one element.

replicate 3 10 
--returns [10,10,10]

[x^2 | x <- [1..10]]
--is a list comprehension
--returns [2,4,6,8,10,12,14,16,18,20]

[x*2 | x <- [1..10], x*2 >= 12]  
--returns [12,14,16,18,20]

[ x | x <- [50..100], x `mod` 7 == 3]  
--returns [52,59,66,73,80,87,94]
