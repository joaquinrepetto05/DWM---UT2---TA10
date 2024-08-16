function getSum(nums) {
    
    // Usar reduce para sumar todos los números en el array
    const sum = nums.reduce((total, current) => total + current, 0);
        
    return sum;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getSum(nums);
