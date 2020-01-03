---
layout: post
title:  "Python Lesson"
date:   2020-01-03 12:30:00 -0500
categories: jekyll update
---


## Python 
### Python is a calculator first

Like many programming languages Python's first function is that of a calculator. 

```Python
1 + 1 # Adding two numbers

```

This will return 2 since Python, like most programming languages functions as a cluculator first. You can also see that anything following a hashtag is a comment which means it will not be executed. There are other basic calculator function included as well.


```Python
1 - 1  # Subtraction 1 minus 1
2 * 2  # Multiplication 2 times 2
4 / 2  # Division 4 divided by 2
4 ** 2 # To the power of. 4 squared

```

There are also more complicated calculator functions built into the the python framework.

```Python
7 % 3  # Modulus ( Which divides and returns the remainder [ in this case 1 ] ) 
7 // 2 # Floor Division ( Which divides and rounds down [ in this case 3 ] )

```

You may also notice there is spaces between the numbers and the operators. This is purely aesthetic. You can have any number of spaces between values as long as they are on the same line. They will read in the same order as PEMDAS and from left to right otherwise. Parenthesis can be applied to functions as well. However, it may be more convenient to assign an operation to a variable which we will cover in a moment.


```Python
# Python can also compare values
4 > 3 # Will return True
3 > 4 # Will return False

True
False
true
false

```


### Variables

You may notice that the True and False above are green while the lowercase are not. That is because 

```Python
True and False
```
are Boolean objects. This means the computer will recognize them differntly from true and false. 

There are several different types of objects. The main ones are 

```Python
strings = 'Words or 21345'  # Can use single or double quotes, as long as they match. These can include words or numbers however even a string is all numbers it cannot be used in math functions until it has been converted to an integer, float, or double

boolean = True # Booleans are True and False. They can be used in many ways but are essentially represent by 1 for True and 0 for False 

integers = -47 # Integers are whole numbers positive or negative

floats = 0.1 # Floats are decimal numbers 

doubles = 0.535334521233456 # Where originally large decimal numbers, however, they are interchangeable with floats in python. You will really only see them in numpy and even then will likely not use them.

```

Above I have assigned all of these different object types into variable whichg, by convention will be all lower case and if they are multiple words each word will be lowercase seperated by '_' (an under-score). 

```Python
example_multi_word_variable = 'Cheese'
# This is considered convention. You also want to be as descriptive with your variable names as you can be without making your code appear cluttered.
```


You may have comments trailing onto the next line depending on the size of your screen. This is because I am using markdown to present this. Normally the comment will continue out to the right requiring you to scroll or make a line break.

Python does not support multi-line commenting so you would typically see something like this

```Python
# Comment
# Comment continuing text. This
# is still the same sentence, 
# however I ran out of space.

```

I won't be doing this since markdown will format it to your screen size for me and this might actually make things look worse. However when writing code it is considered common practice to split your comments into easily readable lines.


### Variable Math

Above I mentioned usinng variables in math. You can do this a number of ways for a number of reasons. You can do this in order to assign value to equations that are pre-built, you can also do this to make code cleaner.


```Python
y = 6
x = y + 7

# Anytime you call y in the future it will be substituted with the value 6
# This assigns the value of x to be y + 7. Variable are always assigned on the left. This makes it easier to find defined variables later on. 


```

So in this case x ends up being equal to 13. 

```Python


```
