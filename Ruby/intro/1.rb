puts "Here is a questionairre for you chumps. What is your favorite color"

answer = gets.chomp

if answer == "puce"
  puts "That's mine too"
elsif answer == "blue" || answer == "red"
  puts "laaaame"
else
  puts "That's cool"
end