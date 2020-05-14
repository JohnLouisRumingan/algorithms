describe "#factorial" do 

    let(:encrypted_factorial) { "OTMzMjYyMTU0NDM5NDQxNTI2ODE2OTkyMzg4NTYyNjY3MDA0OTA3MTU5Njgy\nNjQzODE2MjE0Njg1OTI5NjM4OTUyMTc1OTk5OTMyMjk5MTU2MDg5NDE0NjM5\nNzYxNTY1MTgyODYyNTM2OTc5MjA4MjcyMjM3NTgyNTExODUyMTA5MTY4NjQw\nMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=\n" }

    it "takes a number n as an argument and returns the factorial of n" do 
        expect(factorial(4)).to eq(24)
    end 

    it "takes a large n=100 as an argument and returns the factorial" do 
        expect(Base64.encode64(factorial(100).to_s)).to eq(encrypted_factorial)
    end 
end 

describe "#sum_of_digits" do

    it "takes a number (n) as an argument and returns the sum of its digits" do 
        expect(sum_of_digits(24)).to eq(6)
    end 
end 

describe "#factorial_digit_sum" do 

    let(:encrypted_sum) { "NjQ4\n" }

    it "takes a number (n) as an argument and returns the sum of the digits of n!" do
        expect(factorial_digit_sum(4)).to eq(6)
    end

    it "returns the sum of the digits of the factorial of the number passed in" do
        expect(Base64.encode64(factorial_digit_sum(100).to_s)).to eq(encrypted_sum)
    end
end 

