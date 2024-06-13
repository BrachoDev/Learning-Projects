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

# Creating alist from the message_input
message_list = message_input.split()

# Substituting the values in the message_list with the values of the keys in my_dict
for i in range(len(message_list)):
    if message_list[i] in my_dict:
        message_list[i] = my_dict[message_list[i]]

# Used the .join() method to transform message-list into a phrase
edited_message = " ".join(message_list)

# Printing result
print(edited_message)