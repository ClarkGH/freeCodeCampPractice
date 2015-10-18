puts "Welcome to the number guessing game"
puts "Guess a number between 1 and 100"
answer = 1 + rand(100)

10.times do
  guess = gets.chomp.to_i

  if guess == answer
    puts "You win!"
    exit
  elsif guess != answer
    if guess > answer
      puts "Lower"
    else
      puts "Higher"
    end
  end
end

puts "Game Over!"