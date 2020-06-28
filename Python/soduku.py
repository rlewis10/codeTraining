# check is valid soduku
# adds up to 45
# rows
# coumns
# boxes

list =                              [[1, 2, 3, 4, 5, 6, 7, 8, 9],
                                     [4, 5, 6, 7, 8, 9, 1, 2, 3],
                                     [7, 8, 9, 1, 2, 3, 4, 5, 6],
                                     [2, 3, 4, 5, 6, 7, 8, 9, 1],
                                     [5, 6, 7, 8, 9, 1, 2, 3, 4],
                                     [8, 9, 1, 2, 3, 4, 5, 6, 7],
                                     [3, 4, 5, 6, 7, 8, 9, 1, 2],
                                     [6, 7, 8, 9, 1, 2, 3, 4, 5],
                                     [9, 1, 2, 3, 4, 5, 6, 7, 8]]


def validate_grid(grid):
    def valid_set(numbers):
        numbers = [num for num in numbers if num != ' ']
        return len(numbers) == len(set(numbers))
    line_lengths = list(groupby([len(line) for line in grid]))
    if len(line_lengths) != 1 or line_lengths[0][0] != 9:
        return False
    symbols = set(x for line in grid for x in line)
    if len(symbols.difference(' ')) > 9:
        return False
    rows = [line for line in grid]
    cols = zip(*grid)
    colsList = list(cols)
    squares = []
    square_rows = list(zip(*grid[0:3])) + list(zip(*grid[3:6])) + list(zip(*grid[6:9]))
    while square_rows:
        squares.append(square_rows[0] + square_rows[1] + square_rows[2])
        del square_rows[:3]
    return False not in [valid_set(num_set) for num_set in rows + cols + squares]