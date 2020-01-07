---
layout: post
title:  "Python Lesson"
date:   2020-01-03 12:30:00 -0500
categories: jekyll update
---

# Python 
## Python is a calculator first

Like many programming languages Python's first function is that of a calculator. 

```python
1 + 1 # Adding two numbers
```

This will return the value 2 since Python, like most programming languages functions as a calculator first. You can also see that anything following a hashtag is a comment. Comments are code which will not be executed. There are other basic calculator function included in Python as well.


```python
1 - 1  # Subtraction 1 minus 1
2 * 2  # Multiplication 2 times 2
4 / 2  # Division 4 divided by 2
4 ** 2 # To the power of. 4 squared
```

There are also more complicated calculator functions built into the the python framework.

```python
7 % 3  # Modulus ( Which divides and returns the remainder [ in this case 1 ] ) 
7 // 2 # Floor Division ( Which divides and rounds down [ in this case 3 ] )
```

You may also notice there is spaces between the numbers and the operators. This is purely aesthetic. You can have any number of spaces between values as long as they are on the same line. They will read in the same order as PEMDAS and from left to right otherwise. Parenthesis can be applied to functions as well. However, it may be more convenient to assign an operation to a variable which we will cover in a moment.


```python
# Python can also compare values
4 > 3 # Will return True
3 > 4 # Will return False

True
False
true
false
```


## Variables

You may notice that the True and False above are grey while the lowercase are not. That is because 

```python
True and False
```
are Boolean objects. This means the computer will recognize them differntly from true and false. 

There are several different types of objects. The main ones are 

```python
strings = 'Words or 21345'  # Can use single or double quotes, 
# as long as they match. These can include words or numbers
# however even a string is all numbers it cannot be used in 
# math functions until it has been converted to an integer, float, or double

boolean = True # Booleans are True and False. They can be used in many ways
# but are essentially represent by 1 for True and 0 for False 

integers = -47 # Integers are whole numbers positive or negative

floats = 0.1 # Floats are decimal numbers 

# There are also Doubles, although rarely used
# In python they are basically interchangeable with Floats
# But they are considered less efficient

doubles = 0.535334521233456 
```

Above I have assigned all of these different object types into variable whichg, by convention will be all lower case and if they are multiple words each word will be lowercase seperated by '_' (an under-score). 

```python
example_multi_word_variable = 'Cheese'
# This is considered convention. 
# You also want to be as descriptive with your variable 
# names as you can be without making your code appear cluttered.
```


You may notice the comments trailing onto continuing lines it is convention to break your comment lines so that they fit comfortably onto the screen. When working with code blocks they will allow you to keep writing way off to the right. This becomes unreadable quickly

```python
# This is a trailing comment. It is displeasing and will be annoying to read. It will take you away from everything associated with it and is ultimately going to make it more difficult to see what the comment relates to. A little bit of scrolling is okay since not all screens are the same size. But something like this is obviously ridiculous. Inside of code blocks this will be worse since. the code will move away as you try to read the comment.
```

I won't be doing this since markdown will format it to your screen size for me and this might actually make things look worse. However when writing code it is considered common practice to split your comments into easily readable lines.


## Variable Math

Above I mentioned usinng variables in math. You can do this a number of ways for a number of reasons. You can do this in order to assign value to equations that are pre-built, you can also do this to make code cleaner.


```python
y = 6
x = y + 7

# Anytime you call y in the future it will be substituted with the value 6
# This assigns the value of x to be y + 7. Variable are always assigned on
# the left. This makes it easier to find defined variables later on. 
```

In this case x ends up being equal to 13. 



## Importing
In python there are large libraries you can pull into your code to use from other files. My focus is on Data Science so these are some common modules used in basic Data Science. There are many more, some of which are not included with your standard python installation. These modules can often be installed using pip or conda ( Both of which are common installation libraries ). I won't get into that since if you need these more advanced modules you will likely have adequate resources available for installing them.

```python
import os
import pandas as pd  
import numpy as np 
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
```

The first example above <code>import os</code> is a basic import. In order to call methods ( functions which are assigned to a class ) from this package you would include 'os.' before it [<code>os.mkdir('directory_path')</code>]. This example makes a directory folder at the path provided.

 Pandas and Numpy were given abbreviated names when they were imported. So instead of having to type [<code>numpy.mean([1,3,4,5,2,1,8,12])</code>] you would type [<code>np.mean([1,3,4,5,2,1,8,12])</code>]. This code gets the mean of the list passed to it. 

The sklearn import is actually a class. So we wouldn't be able to call it as a method instead we would instantiate it to a variable. [<code>model = LinearRegression()</code>] The key thing to take away from here is that you wouldn't need to add the [<code>sklearn.linear_model</code>] anywhere into the code when calling it. 


### Functions

In Python you can define your own functions to perform repeated tasks

```python
def quad_func(a,b,c):
  discrim = (b**2) - (4 * a * c)
  factor_a = (-b + (discrim)**(1/2)) / 2*a
  factor_b = (-b - (discrim)**(1/2)) / 2*a
  return factor_a, factor_b, discrim
```

The function above is a pythonic representation the quadratic formula. There are probably shorter and longer ways to write this. But as long as it functions and is easy to understand then the code is good. 

```python
quad_func(2,4,2)
```

Running the above code will return the values (-4.0, -4.0, 0) to the console. The first two values represent the 'zeroes' returned by solving a typical quadratic formula problem and the 0 is the result of the discriminant.
