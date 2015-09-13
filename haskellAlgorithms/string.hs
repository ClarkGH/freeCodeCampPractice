module Strings where

data Str = C Char Str 
         | NilString

--helloString = C 'h' (C 'e' (C 'l' (C 'l' (C 'o' NilString))))
helloString = C 'h' $ C 'e' $ C 'l' $ C 'l' $ C 'o' NilString

instance Show Str where
  show NilString = "NilString"
  show (C char restOfString) = "(C " ++ show char ++ " " ++ show restOfString ++ ")"

printStr NilString = ""
printStr (C letter restOfString) = toString letter ++ printStr restOfString
  where
    toString letter = [letter]

main :: IO ()
main = do
  putStrLn $ printStr helloString