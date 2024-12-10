# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.


The runtime of the implemented code in terms of comparisons is $\Theta(n^2)$, this is because finding the maximum element within the unsorted portion of the array using the maxIndex requires scanning up to $n$ elements during each iteration. This process is repeated for each unsorted segment of the array, resulting in a total of $\Theta(n^2)$ comparisons as the algorithm sorts the entire array.

For the number of flips, the runtime is $\Theta(n)$. Each iteration involves a maximum of two flips: the first flip places the largest unsorted element at the start of the array, and the second moves it to its correct position within the sorted section. Since there are n elements to sort, this totals to 2n flips, Asymptotically we ignore constants, so the runtime complexity in terms of flips is $\Theta(n)$


References:

The following website gave me the understading of the code. Everything is done myself despite doing it last time. 

https://www.geeksforgeeks.org/pancake-sorting/

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice