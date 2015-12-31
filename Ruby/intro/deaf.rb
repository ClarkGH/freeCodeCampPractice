puts "Give me a starting year"

start = gets.chomp.to_i

puts "Give me an ending year"

end_yr = gets.chomp.to_i

while start < end_yr

  if (end_yr % 4 == 0)
    puts "#{end_yr}"
  end
  end_yr = (end_yr - 1)
end

puts "These be leap years in those dates"