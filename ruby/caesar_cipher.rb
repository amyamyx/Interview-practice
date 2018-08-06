# Write a function that takes a message and an increment amount and
# outputs the same letters shifted by that amount in the alphabet. 
# Assume lowercase and no punctuation. Preserve spaces.

def caesar_cipher(str, shift)
  str.split.map { |word| caesar_cipher_word(word, shift) }.join(" ")
end

def caesar_cipher_word(word, shift)
  letters = ('a'..'z').to_a + ('A'..'Z').to_a
  word.chars.map do |ch|
    old_idx = letters.index(ch)
    new_idx = (old_idx % 26 + shift) % 26
    new_idx += old_idx < 26 ? 0 : 26

    letters[new_idx]
  end.join
end


a = "abcxxxABC"
p caesar_cipher(a, 3) # 'defaaaDEF'