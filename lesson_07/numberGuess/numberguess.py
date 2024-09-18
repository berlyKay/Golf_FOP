
def guess_Number():
    target = int(input("Please enter an integer: "))
    guess = int(input("Enter your guess: "))
    count = 1
    while count < 4:
        if guess == target:
            if count == 1:
                return f"You guessed it in {count} try!!"
            else:
                return f"You guessed it in {count} tries!"
        if guess > target:
            guess = int(input("Too high - try again: "))
        elif guess < target:
            guess = int(input("Too low - try again: "))
        count += 1
    print("Sorry! You weren't able to guess it in four tries.")  
    play_again = input("Play again? Y or N ")
    if play_again.upper() == "Y":
        return guess_Number()
    else:
        return "Thank you for playing! Try again soon."

print(guess_Number())

