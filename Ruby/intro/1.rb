puts "Welcome to TODO! Enter 3 tasks:"

tasks = []

3.times do
  puts "Enter a task:"
  tasks << gets.chomp
end

puts "Please remeber to do the following:"
puts tasks