// function sumNumbers(...numbers){
//     let total =0;

//     for (const num of numbers) {
//         total +=num;
//     }
//     return total;
// }
// console.log(sumNumbers(10,20));
// console.log(sumNumbers(5,10,15,20));
// console.log(sumNumbers(1,2,3,4,5,6,7));



function sumNumbers(...numbers){
    let total=0;

    for (const num of numbers) {
        total+=num;
    }
    return total;
}

console.log(sumNumbers(247343437,1));
console.log(sumNumbers(10, 20));
console.log(sumNumbers(5, 10, 15, 20));
console.log(sumNumbers(1, 2, 3, 4, 5, 6));



