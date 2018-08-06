# Write a function, fibs(num) which returns the first n elements 
# from the fibonnacci sequence, given n.

# Solve it both iteratively and recursively.

def fibs(num)
  fib = [1,1]
  
  while fib.size < num
    fib.push(fib[-2, 2].reduce(:+))
  end

  fib[0, num]
end

def fibs_rec(num)
  return [1,1][0, num] if num <= 2

  prev = fibs_rec(num - 1)
  new_el = prev[-2, 2].reduce(:+)

  prev.push(new_el)
end

p fibs_rec(8)
p fibs(8)