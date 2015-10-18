puts "HELLO BOY, WHAT DO YOU WANT?"

response = gets.chomp
num = rand(100)

while response != response.upcase
  puts "WHAT? SPEAK UP!"
  response = gets.chomp
end

puts "No not since #{1900 + num}"
