
def is_prime(n)

    # return edge case of 0 and 1 
    return false if n == 0 || n == 1

    integers =* (2..Math.sqrt(n).round)
    integers.each {|i| return false if (n % i == 0)}
    return true
end 


def prime_number_for(n_element) 

    # iterate through numbers until element == n_element 
    # element += 1 iff number is a prime 

    element = 0
    number = 0 

    while element != n_element
        number += 1
        if is_prime(number)
            element += 1
        end 
    end 

    return number
end 