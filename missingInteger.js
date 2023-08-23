function findMissingNumber(arr) {
    const number = arr.length + 1;
    const total_sum = (number * (number + 1)) / 2;
    const arr_sum = arr.reduce((sum, num) => sum + num, 0);
    const missing_number = total_sum - arr_sum;

    return missing_number;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const missing = findMissingNumber(numbers);
console.log('The missing number is: ' + missing);