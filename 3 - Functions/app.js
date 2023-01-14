//Old style
function sum(x, y){
    return Number(x) + Number(y);
}

console.log(`Sum = ${sum(2, 4)}`);
console.log(`Sum = ${sum(5, 4)}`);
console.log(`Sum = ${sum(-2, 2)}`);

//arrow functions
const radical = (x) => Math.sqrt(x);

//new style
const solveEquation = (a, b, c) =>  {
    const delta = b**2 - 4 * a * c;
    if(delta < 0){
        return [];
    }
    if(delta === 0){
        const x = -b / 2 * a;
        return [x];
    }
    const x1 = (-b - radical(delta)) / 2 * a;
    const x2 = (-b + radical(delta)) / 2 * a;
    return [x1, x2];
}

console.log(solveEquation(2, 5, 4));
console.log(solveEquation(1, 4, 0))
console.log(solveEquation(1, 0, 0))