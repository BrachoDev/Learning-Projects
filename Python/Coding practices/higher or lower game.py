lower_bound = 0
upper_bound = 0

while lower_bound >= upper_bound: 
    lower_bound = int(input('Enter the lower bound: '))
    upper_bound = int(input('Enter the upper bound: '))
    if lower_bound >= upper_bound:
        print('The lower bound must be less than the upper bound.')

import random

random_number = random.randint(lower_bound,upper_bound)

guess_number = 0

while not guess_number == random_number:
    guess_number = int(input(f'Guess a number between {lower_bound} and {upper_bound}: '))
    if guess_number < lower_bound or guess_number > upper_bound:
        print('Guess out of bound!')
    elif guess_number < random_number:
        print('Nope, too low.')
    elif guess_number > random_number:
        print('Nope, too high.')

print('You got the correct answer!')