numbers = [5, 17, 2, 899, 101, 4, 66, 123, 98]
names   = []

5.times do
  puts "Please enter a name"
  names << gets.chomp
end

names.each do |name|
  puts "There once was a person named " + name + "."
end