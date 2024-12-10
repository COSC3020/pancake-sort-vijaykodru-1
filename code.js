function flip(array, n) {
    let start = 0;
    let end = n - 1;
    while (start < end) {
        // Swap elements at start and end
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let n = array.length;

    // Iterate over the array, shrinking the unsorted portion
    for (let i = n; i > 1; i--) {
        // Find the index of the largest element in array[0..i-1]
        let maxIndex = 0;
        for (let j = 1; j < i; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }

        // If the largest element is not at its correct position
        if (maxIndex !== i - 1) {
            // Flip the largest element to the top (if it's not already there)
            if (maxIndex !== 0) {
                flip(array, maxIndex + 1);
            }

            // Flip it to its correct position at the end of the unsorted portion
            flip(array, i);
        }
    }

    return array;
}