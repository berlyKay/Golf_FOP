import random

target = random.randint(1, 100) 

def guess_Number():
    print(target)
    guess = int(input("Enter your guess: "))
    count = 1
    while guess != target:
        if guess > target:
            guess = int(input("Too high - try again: "))
        elif guess < target:
            guess = int(input("Too low - try again: "))
        count += 1
        if guess == target:
            if count == 1:
                return f"You guessed it your first try!!"
            else:
                return f"You guessed it in {count} tries!"

print(guess_Number())
