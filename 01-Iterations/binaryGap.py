import sys

def main():
  n = sys.argv[1]
  return solution(int(n))

def solution(N):
  b = bin(N)[2:]
  print(b)
  clear = False
  count = 0
  maxCount = 0
  for c in b:
    if (c == '1' and count != 0 and clear != False):
      if (count > maxCount):
        maxCount = count
      count = 0
    if (c == '1' and count == 0):
      clear = True
    else:
      count += 1
  print(maxCount)
  return maxCount

main()