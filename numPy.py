import numpy as np
import numpy.random as random

# Speed & Size
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

a1[1:4:2,1:4:2]

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
> Trailing Dimensions are equal
> One of Trailing Dimensions is 1
> If trailing dimension is missing, Assumed to be 1
"""

a3 = np.array([[1],[2],[3],[4],[5]])
a4 = np.arange(10).reshape(5,2) 

np.all(a1) # True vs False

print(a3.shape,a3[:,np.newaxis].shape)

np.identity(3)
np.zeros((3,3))
np.ones((3,3))