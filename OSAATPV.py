inputstring =list(map(int, input("Enter the pages in a single line and seperate them with a space : ").split()))
pageframes = []
noofframes = int(input("Enter number of page frames : "))
# FIFO
def fifo(inputstring,noofframes):

  pagefaults = 0
  pagehits = 0

  for val in inputstring:
    if val not in pageframes:
      pagefaults +=1
      if len(pageframes) == noofframes:
        pageframes.pop(0)
      pageframes.append(val)
    else:
      pagehits +=1

  missratiofifo = round((pagefaults/len(inputstring))*100,2)
  hitratiofifo = round((pagehits/len(inputstring))*100,2)

  return missratiofifo,hitratiofifo

#LRU
pageframes = []
def LRU(inputstring,noofframes):
  usage = {}

  pagefaults = 0
  pagehits = 0

  unique = set(inputstring)
  for val in unique:
    usage[val] = 0

  for val in inputstring:    
    if val not in pageframes:            

      if len(pageframes) != noofframes:
        pagefaults +=1
        pageframes.append(val)        
        for val in pageframes:
          usage[val] +=1
      else:
        pagefaults +=1
        Keymax = max(usage, key= lambda x: usage[x])
        index = pageframes.index(Keymax)
        pageframes[index] = val
        usage[Keymax] = 0
        for tval in pageframes:
          usage[tval] +=1
        usage[val] = 0
        
    else:
      pagehits +=1      
      for tval in pageframes:
        usage[tval] +=1
      usage[val] = 0
  
  missratiolru = round((pagefaults/len(inputstring))*100,2)
  hitratiolru = round((pagehits/len(inputstring))*100,2)

  return missratiolru,hitratiolru


missratiofifo,hitratiofifo = fifo(inputstring,noofframes)
print(f"Miss ratio using FIFO is : {missratiofifo} %")
print(f"Hit ratio using FIFO : {hitratiofifo} %")
print('\n')
missratiolru,hitratiolru = LRU(inputstring,noofframes)
print(f"Miss ratio using LRU is : {missratiolru} %")
print(f"Hit ratio using LRU : {hitratiolru} %")
print('\n')
if missratiofifo < missratiolru:
  print("FIFO is better than LRU for the given input string and number of page frames")
elif missratiofifo>missratiolru:
  print("LRU is better than FIFO for the given input string and number of page frames")
else:
  print("Both LRU and FIFO have the same hit and miss ratios")
input("")