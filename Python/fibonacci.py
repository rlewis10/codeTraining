
def fibonacci(n):
    c = 0
    a = [0,1]

    while c < n:
        c = a[-1] + a[-2]
        a.append(c)

    return a

print(fibonacci(6))

def fibrecur(n):
    if n==0: 
        return 0
    elif n==1: 
        return 1
    else: 
        return fibrecur(n-1) + fibrecur(n-2) 

print(fibrecur(6))