const n1 = 1;
const n2 = 5;
const n3 = -2;
const n4 = 7;
const n5 = 0;


const sum = n1 + n2 + n3 + n4 + n5;
console.log(sum);

//
const numbers = [1, 5, -2, 7, 1, 4, 9, 13, 123];
const sumArray = (array) => {
    let sum = 0;
    for(let i = 0 ; i < array.length ; i++){
        sum = sum + array[i]
    }
    return sum;
}

const multiplyArray = (array) => {
    let result = 1;
    for(let i = 0 ; i < array.length ; i++){
        result = result * array[i]
    }
    return result;
}

console.log(sumArray(numbers));
console.log(multiplyArray(numbers));