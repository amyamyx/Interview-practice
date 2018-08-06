# Write a method, digital_root(num). It should sum the digits of a positive integer.
# If it is greater than or equal to 10, sum the digits of the resulting number.
# Keep repeating until there is only one digit in the result, called the
# "digital root". Do not use string conversion within your method.

# string conversion
# def digital_root(num)
#   return num if num < 10
#   digital_root(num.to_s.chars.map(&:to_i).reduce(:+))
# end

def digital_root(num)
  return num if num < 10
  i = 1
  sum = 0
  while 10 ** (i - 1) <= num
    sum += num % (10 ** i) / (10 ** (i - 1))
    i += 1
  end

  return digital_root(sum)
end

p digital_root(89)
