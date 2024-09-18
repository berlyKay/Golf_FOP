# amount = input("Please enter a number of cents from 0 - 99: ")

def coins(amount):
    Q = 0
    D = 0
    N = 0
    P = 0
    # global Q, D, N, P
    amount = int(amount)
    if amount >= 25:
        Q = amount // 25
        amount = amount - Q * 25
    if amount >= 10:
        D = amount // 10
        amount = amount - D * 10
    if amount >= 5:
        N = amount // 5
        amount = amount - N * 5
    P = amount
    print(Q, D, N, P)
    return(f'Q: {Q} D: {D} N: {N} P: {P}')

print(coins(57))