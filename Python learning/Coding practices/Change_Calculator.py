# User's input
total_change = int(input())

# Setting up variables:
dollar = total_change // 100
quarter = total_change % 100 // 25
dime = total_change % 100 % 25// 10
nickel = total_change % 100 % 25 % 10 // 5
penny = total_change % 100 % 25 % 10 % 5 // 1

# Conditional for no change
if total_change == 0:
    print('No change')

# Conditional for words dollar and dollars
if dollar > 1:
    print(f'{dollar} Dollars')
elif dollar == 1:
    print(f'{dollar} Dollar')

# Conditional for words quarter and quarters
if quarter > 1:
    print(f'{quarter} Quarters')
elif quarter == 1:
    print(f'{quarter} Quarter')

# Conditional for words dime and dimes
if dime > 1:
    print(f'{dime} Dimes')
elif dime == 1:
    print(f'{dime} Dime')

# Conditional for words nickel and nickels
if nickel > 1:
    print(f'{nickel} Nickels')
elif nickel == 1:
    print(f'{nickel} Nickel')

# conditional for words penny and pennies
if penny > 1:
    print(f'{penny} Pennies')
elif penny == 1:
    print(f'{penny} Penny')