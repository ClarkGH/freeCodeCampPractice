module Lists where

data LinkedList = Cons Int LinkedList
                | Nil

listOfThree = Cons 1 (Cons 2 (Cons 3 (Cons 4 Nil)))

firstElement list = case list of
                         Nil -> error "Empty list!"
                         Cons info _ -> info

secondElement list = case list of
                          Nil -> error "Empty"
                          Cons _ restOfList -> firstElement restOfList

elementAt 0 (Cons info _) = info
elementAt index (Cons _ restOfList) = elementAt (index - 1) restOfList
elementAt _ Nil = error "Index out of bounds!"

lengthOf Nil = 0
lengthOf (Cons _ restOfList) = 1 + lengthOf restOfList


main :: IO ()
main = do
  putStrLn (show (lengthOf listOfThree))
