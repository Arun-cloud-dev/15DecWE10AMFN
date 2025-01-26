// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const fruits = new Array("apple", "banana", "orange", "mango");



// console.log(fruits[1]);



// const fruits = ["apple", "banana", "orange", "mango"];


// fruits.push('cherry');

// fruits.pop();

// fruits.shift();

// fruits.unshift('kiwi');

// console.log(fruits);


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const Squared = number.map(num => num * num);


// console.log(Squared);



// const evenNumbers = number.filter(num => num % 2 === 0);

// console.log(evenNumbers);

// const sum = number.reduce((acc, num) => acc + num, 0);


// console.log(sum);




// const fruits = ["apple", "banana", "orange", "mango"];



// fruits.forEach(fruits => console.log(fruits))



// const matrix = [1, 2, 3, 4, [5, 6, 7, [8, 45, 55, 66, [77, 888, 999], 9, 10]]]


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// console.log(matrix[4][3][6]);


matrix.forEach((row) => {
  row.forEach((element) => {
    console.log(element);
  });
});