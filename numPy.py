import numpy as np
import numpy.random as random

# Speed & Size Advantage over Python in-builts
def print_info(a1):
    a1.ndim, a1.shape, a1.dtype, a1.strides, a1.flags

a1 = np.arange(16,32).reshape(4,4)
print_info(a1)

a1.astype('float')

for i in np.nditer(a1):
    print(i,end=" ")

a2 = np.asfortranarray([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])

for i in np.nditer(a2):
    print(i, end=" ")

a1.ravel()
print_info(a2)
a3 = np.transpose(a2)
print_info(a3)

a1[1:4:2,1:4:2] # rows x cols - start,end,skip

a1[(a1>20) & (a1%2==0)]
a1+a2
a1*a2

a3 = a1
a1[3][1] = -1

a3 = a1.copy()
a1[1][2] = -5

np.mean(a1)
np.median(a1)
np.std(a1)
np.var(a1)

np.random.rand(1,5,5)
np.random.random((3,5))

np.abs(a2-3)
a1.argmin(axis=0)

np.argsort(a1) # returns indexices
np.sort(a1,axis=-1) # returns values

"""
Broadcasting - Expands smaller arrays to match other operand's size

- Depends of trailing dimensions i.e (Rows x Col.) - > Trailing = Col.s
will work if 
> Dimensions are equal
> if non-corresponding dimensions are 1 i.e (4,1) & (1,3)
> One of Dimensions is 1 & the other corresponding ones match (4,3) & (4,1)  or (4,3) & (1,3)
> If trailing dimension is missing, Assumed to be 1


- If the dimensions are unequal, add 1 dimension to smaller to match.
 (3,3,3) & (3,,) -- > Turn (3,,) to (3,1,1)
"""

a3 = np.array([[1],[2],[3],[4],[5]])
a4 = np.arange(10).reshape(5,2) 

np.all(a1) # True vs False

print(a3.shape,a3[:,np.newaxis].shape)

np.identity(3)
np.zeros((3,3))
np.ones((3,3))
np.transpose(a1)

a1.itemsize
a1.nbytes

np.array([1,2,3,4,5,6,7,8,9],dtype=complex)

#linspace - Linearly Spaced - (RangeLower,RangeUpper,NoOfItems) - All entries will be equally spaced

np.linspace(-5,5,5)

np.eye(3)
np.eye(3) == np.identity(3)

np.diag([1,3,5]) 

# by default its int64 you can change that to
np.array([1,2,3,4,5], dtype=np.int32)

np.round(np.array([1.25,2.36,4.55]))
np.floor(np.array([1.25,2.36,4.55]))
np.ceil(np.array([1.25,2.36,4.55]))

np.min([25,2,1,-1,55,6])
np.max(a1,axis=0)
np.sum(a2,axis=1)
np.prod(a2,axis=1)

np.dot(a1,a2)
np.log(10)
np.exp(a1)

# np.random.shuffle(a1) Impacts original

np.ravel(a1) # N-D to 1-D

print(np.vstack((a1,a2)))# 4x4 + 4x4 -- >  8x4
print(np.hstack((a1,a2)))# 4x4 + 4x4 -- > 4x8

print(np.hsplit(a1,2)) # Actually  |
print(np.vsplit(a1,2)) # Actually -

a1[:,[0,2,3]] #Fancy Indexing

print(a1[(a1>5) & (a1%2==0)]) # Boolean Array as a mask
print((a1>5) & (a1%2==0)) # Boolean Array example


a5 = np.arange(12).reshape(4,3);
a6 = np.arange(4).reshape(4,1)
a5+a6 # Works

a5 = np.arange(12).reshape(4,3);
a6 = np.arange(3).reshape(1,3)
a5+a6 # Works

a5 = np.arange(12).reshape(4,3);
a6 = np.arange(3).reshape(3,1)
#a5+a6 - Does Not Work

a5 = np.arange(12).reshape(4,3);
a6 = np.arange(9).reshape(3,3)
#a5+a6 - Does Not Work

a5 = np.arange(4).reshape(4,1);
a6 = np.arange(3).reshape(1,3)
a5+a6 # Works

a5 = np.arange(4).reshape(2,2);
a6 = np.arange(1).reshape(1,1)
a5+a6 # Works

a5 = np.arange(6).reshape(3,2);
a6 = np.arange(6).reshape(2,3)
#a5+a6 - Does Not Work

a5 = np.arange(12).reshape(4,3);
a6 = np.arange(3).reshape(1,3)
a5+a6 # Works

# More Mathematical Functions

# Sigmoid  f(x) = 1/(1+(e^-x)) 
def sigmoid(array):
    return 1/(1 + np.exp(-array))

# Mean Squared Error - Loss Function - gives ways to reduce error - (1/n)Summation(Actual - Predicted)^2
def mse(actual,predicted):
    return np.mean((actual - predicted)**2)

# Binary Cross Entropy
def bce(actual,predicted):
    return -(np.mean(actual*np.log(predicted) + (1-actual)*np.log(1-predicted)))


# Dealing with missing values, nan != None; Removing nan values
a8 = np.array([1,2,3,4,5,6,np.nan,8,9,np.nan,11])

a8 = a8[~(np.isnan(a8))]

"""
# Plotting Graphs
import matplotlib.pyplot as plt
x = np.linspace(-10,10,100)
y = x
plt.plot(x,y)
plt.show()

y = x**2
plt.plot(x,y)
plt.show()

y = np.sin(x)
plt.plot(x,y)
plt.show()

plt.pie([10,40,50],labels=['ten','forty','fifty'])
plt.show()

plt.bar([10,20,30,40,50],[1,2,3,4,5])
plt.show()

y = x*np.log(x)
plt.plot(x,y)
plt.show()

"""

np.sort([10,12,5,74,19,84,52,37,68])
np.sort(a1) # Even works on n-d arrays, sorts rows (default axis = 1)
np.sort(a1,axis=0) # col 
np.sort(a1)[::-1] #descending

r = np.array([12,55,85,69,44,47,23])
print(np.append(r,400)) #no modification, return new array with change
print(np.append(a1,np.random.random((a1.shape[0],1)),axis=1))

np.concatenate((a1,a2),axis=1) #hstack and vstack like

np.unique([10,10,22,24,25,24,22])

print(np.expand_dims(r,axis=0))
print(np.expand_dims(r,axis=1))

np.where(r>50) #returns indices - basic use
np.where(r>50,1,0) # (Condition,True,False)

np.argmax(a1,axis=0)
np.argmin(a1,axis=1)

print(np.cumsum(a1,axis=1))
print(np.cumprod(a1,axis=0))

np.flip(r)
print(np.flip(a1)) # flips both
print(np.flip(a1,axis=0))
print(np.flip(a1,axis=1))

np.percentile(a1,50)
np.histogram([10,10,10,15,15,14,14,7,7], bins=[0,5,10,15,20,25])

np.corrcoef([[10,5],[2,1]],[[22,8],[0,2]])
np.isin([20,1,5,14,15],[10,10,15,14,18,16,19,20,22]) #(to be searched for, array) - > Bool Array

np.put(r,[0,1],[0,0]) # (array,indices to be changes, replaced new values) -> impacts original
print(r)

print(np.delete(r,[0,1]))

np.union1d([1,2,3,4,5],[1,3,5])
np.intersect1d([1,2,3,4,5],[1,3,5])
np.setdiff1d([1,2,3,4,5],[1,3,5])
np.setxor1d([1,2,3,4,5],[1,3,5,7,9])

print(np.clip(r,20,35)) # maintains a range, larger value replaced by upper limit, similarly for lower limits