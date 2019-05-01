def repeat(word):
    def inc(num):
        return word * num
    return inc

r1 = repeat('hello')
r2 = repeat('goodbye')

print(r1(2))
print(r2(2))
print(repeat("cool")(3))


def make_counter():
    x = 0
    def inc():
        nonlocal x
        x += 1
        return x
    return inc

ctr1 = make_counter()
print(ctr1()) 
print(ctr1()) 

ctr2 = make_counter()
print(ctr2()) 
print(ctr1())
print(ctr2())
