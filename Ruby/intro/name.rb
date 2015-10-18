names = []
puts "What is your first name?"

names << gets.chomp

puts "What is your middle name, leave blank if none?"

names << gets.chomp

puts "what is your last name?"

names << gets.chomp

puts "Greetings #{names[0].capitalize} #{names[1].capitalize} #{names[2].capitalize}"