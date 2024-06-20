# Getting file as input
file_name = 'Python/Coding practices/Sorting TV Shows (files in python)/file1.txt'

# Creating empty dictionary to add keys and values to:
shows = {}

# Reading file and creating a list with it
with open(file_name, 'r') as input_file:
    list = input_file.readlines()

# Adding number of seasons and title names to the show dictionary using a loop:
for i in range(0, len(list), 2):
    seasons = int(list[i].strip())
    title = list[i + 1].strip()

    if seasons not in shows:
        shows[seasons] = []

    shows[seasons].append(title) 

# Creating output_keys.txt with a list of shows and their seasons:
with open('Python/Coding practices/Sorting TV Shows (files in python)/output_keys.txt', 'w') as keys_out_file:
    for number in sorted(shows):
        keys_out_file.write(f'{str(number)}: ' + '; '.join(sorted(shows[number])) + '\n')

# Creating output_titles.txt with a list of shows sorted:
with open('Python/Coding practices/Sorting TV Shows (files in python)/output_titles.txt', 'w') as titles_out_file:
    for key in sorted(shows.values()):
        for value in sorted(key):
            titles_out_file.write(f'{value}\n')