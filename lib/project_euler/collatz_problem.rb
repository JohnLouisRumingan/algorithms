
# returns next even number input for n
def even_next(n)
    return n/2
end

# return next odd number input for n
def odd_next(n)
    return 3*n + 1 
end 

#returns next value in a sequence for any interget input of n
def next_value(n)
    n % 2 == 0 ? even_next(n) : odd_next(n)
end

#returns Collatz sequence from n to 1 in an array
def collatz(n)
    new_array = []
    
    while n != 1
        new_array << n 
        n = next_value(n)
    end 
    
    new_array << n #needs to do this one last time when n = 1 
    return new_array
end

#returns starting number under one million that returns the longest sequence
def longest_collatz(n=1000000)
    longest_record = 0 
    longest_starting_number = 0 

    (1..n).each do |starting_num|
        current_collatz = collatz(starting_num).length
        if (current_collatz > longest_record)
            longest_record = current_collatz
            longest_starting_number = starting_num
        end
    end 

    return longest_starting_number
end 