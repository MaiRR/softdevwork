def pythagorean(n):
    return [(a,b,c) for a in range(1,n) for b in range(a,n) for c in range(b,n) if a**2+b**2==c**2]

print(pythagorean(30))


def quicksort(arr): return sum([[] if len(arr) == 0 else quicksort([x for x in arr if x < arr[0]]) + [x for x in arr if x == arr[0]] + quicksort([x for x in arr if x > arr[0]])],[])

print(quicksort([3,2,33,1,5,7,1,4,9,23,4,23,7]))
