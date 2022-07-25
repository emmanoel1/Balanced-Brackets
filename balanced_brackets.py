#!/bin/python3

# Complete the 'isBalanced' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING brackets as parameter.

def isBalanced(brackets):
    # Your code here
    verify = []
    bracketCompare = ['{', '(', '[']
    bracketTypes = {'{': '}', '(': ')', '[': ']'}

    for str in brackets:
        if str in bracketCompare:
            verify.append(str)
        else:
            if verify:
                top = verify.pop()
                if bracketTypes[top] != str:
                    return 'NO'
            else:
                return 'NO'
    return 'NO' if verify else 'YES'

    if __name__ == '__main__':

        t = int(input().strip())

    results = []
    for t_itr in range(t):
        brackets = input()

        results.append(isBalanced(brackets))

    print(*results, sep='\n')
