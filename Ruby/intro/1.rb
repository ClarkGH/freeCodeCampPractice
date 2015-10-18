puts "Enter any US state"

response = gets.chomp

states = {
                    "california" => "wub wub wub",
                    "utah"       => "More like pootah",
                    "arizona"    => "I have two son",
                    "nevada"     => "That is a place",
                    "minnesota"  => "I like mayonaisse"
                   }

puts states[response]