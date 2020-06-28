
# split string into array
# check if alpha numeric
# inverse string
# compare

def palindrome(input):

    filtered = filter(' ', input)
    print(filtered)


print(palindrome('A Man, A Plan, a Canal: Panama!'))


def palindrome1(sentence):
    filtered = ''.join([c if c.isalnum() else ''
        for c in sentence]).lower()
    return len(filtered) > 0 and filtered == filtered[::-1]

print(palindrome1('A Man, A Plan, a Canal: Panama!'))