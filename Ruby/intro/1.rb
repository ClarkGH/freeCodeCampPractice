puts "Hello, please give me a word to randomize"

string = gets.chomp
string = string.split('')
string = string.shuffle
puts "Your randomized word is #{string.join}"