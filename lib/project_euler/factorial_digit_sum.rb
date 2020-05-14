def factorial(num = 1)

    if (num == 1)
      return 1
    else 
      num = num * factorial(num - 1)
    end 
  
end

def sum_of_digits(num = 1)

    result = num.to_s.split('')
    sum = 0
    result.each do |digit|
        sum += digit.to_i
    end
    return sum
end 
  
def factorial_digit_sum(num = 1)

    return factorial_digit = sum_of_digits(factorial(num))
end 