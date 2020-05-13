#base x, exponent n
def power_digit_sum (x = 0, n = 0)

    target = x ** n 
    #split target into array of string characters, then collect characters and add them
    sum = 0
    target = target.to_s.split('')
    target.each do |num|
        sum += num.to_i
    end 
    return sum 
end 