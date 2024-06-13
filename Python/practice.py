# User's inputs:
dictionary_input = input()
message_input = input()

# Creating a list using the first input:
dictionary_list = dictionary_input.split()

# Creating a dictionary from list:
my_dict = {}

# Adding keys to dictionary
for n in range(0 , len(dictionary_list), 2):
    my_dict[dictionary_list[n]] = dictionary_list[n + 1]

