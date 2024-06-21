# Getting file as input
file_name = 'Python/Coding practices/Sorting TV Shows (files in python)/file1.txt'

# Creating empty dictionary to add keys and values to:
shows = {}

# Reading input file:
with open(file_name, 'r') as input_file:
    lines = input_file.readlines()

    # Adding number of seasons and title names to the show dictionary using a loop:
    for i in range(0, len(lines), 2):
        seasons = int(lines[i].strip())
        title = lines[i + 1].strip()

        if seasons not in shows:
            shows[seasons] = []
        
        shows[seasons].append(title)

# Creating output_keys.txt with a list of shows and their seasons:
with open('Python/Coding practices/Sorting TV Shows (files in python)/output_keys.txt', 'w') as keys_out_file:

    for seasons in sorted(shows.keys()):
        keys_out_file.write(f"{seasons}: {"; ".join(shows[seasons])}\n")

# Taking all the tv shows from the disctionary shows to sort them
shows_titles = []
for title in shows.values():
    shows_titles.extend(title)
shows_titles.sort()

# Creating output_titles.txt with a list of shows sorted:
with open('Python/Coding practices/Sorting TV Shows (files in python)/output_titles.txt', 'w') as titles_out_file:

    for show in shows_titles:
        titles_out_file.write(f"{show}\n")
