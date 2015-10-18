puts "HELLO BOY, WHAT DO YOU WANT?"

response = gets.chomp
num = rand(50)

while response != response.upcase
  puts "WHAT? SPEAK UP!"
  response = gets.chomp
end

puts "No not since #{1900 + num}"

farewell = ""

while farewell != "BYE BYE BYE"
  farewell = gets.chomp
end

