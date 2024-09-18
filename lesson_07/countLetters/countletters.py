def count_letters(my_list):
    my_obj = {}
    for letter in my_list:
            letter = letter.upper()
            if (letter in my_obj) == False:
                my_obj[letter] = 1
            else:
                my_obj[letter] += 1
    return my_obj

print(count_letters("AaBb"))

