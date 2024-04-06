function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

// Example usage
console.log(sumArray([1, 2, 3, 4, 5])); 

// Outputs: 15
