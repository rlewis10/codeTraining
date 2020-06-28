
lookup_table = {
    "1": "1",
    "2": "ABC2",
    "3": "DEF3",
    "4": "GHI4",
    "5": "JKL5",
    "6": "MNO6",
    "7": "PQRS7",
    "8": "TUV8",
    "9": "WXYZ9", 
    "0": "0",
    "": ""
}


def decode(input):
    output = []
    i = 0
    ii  = 0
    while i < len(input): 
        keyPress = []
        while (ii < len(input) and input[i] == input[ii]):
            keyPress.append(input[ii])
            ii += 1
        lookup = lookup_table[input[i]]
        count = len(keyPress)-1
        output.append(lookup[count])
        i = ii 
    print(output)

decode('1077777267777')
