Honestly, looking at both solutions, your old solution is actually closer to how many beginners (and even intermediates) would naturally solve the problem.

Let's analyze your thought process from 2 years ago:

const sortArray = arr.sort(function(a,b){return a-b})

You first sorted the array:

[1, 2, 3, 4, 5]

Then:

let sum1 = 0
for(let i = 0; i < 4; i++){
    sum1 += sortArray[i]
}

You summed the first 4 numbers:

1 + 2 + 3 + 4 = 10

That's the minimum sum.

Then:

let sum2 = 0
for(let i = 1; i < sortArray.length; i++){
    sum2 += sortArray[i]
}

You summed the last 4 numbers:

2 + 3 + 4 + 5 = 14

That's the maximum sum.

What were you thinking?

Probably something like:

"If the array is sorted, the smallest 4 numbers give me the minimum sum, and the largest 4 numbers give me the maximum sum."

Which is perfectly valid.

Compare the two solutions
Old solution
sort
loop
loop

Complexity:

O(n log n)

because sorting dominates.

Your current solution
find total
find min
find max

Complexity:

O(n)

No sorting needed.

What I find interesting

Two years ago you solved it with:

sorting
indexing
loops

Today you immediately started thinking:

total - smallest
total - biggest

That's a sign your algorithmic thinking has improved.

The old version says:

"Let's rearrange the data and then solve the problem."

The new version says:

"Let's find the mathematical relationship and avoid extra work."