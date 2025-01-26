// const person = {
//     name: "arun",
//     age: 25,
    
// }


// console.log(typeof person);

// console.log(person);

// console.log(person.age);


// console.log(`hello ${person.name} you are ${person.age} years old`);





// const student = {
//     name: "arun",
//     age: 25,
//     enrolled: true,
// }



// student.grade = "A";
// student.age = 26;

// console.log(student);



// const student = {
//     name: "arun",
//     age: 25,
//     enrolled: true,
//     greet: function() {
//        console.log(`hello ${this.name}`);
//     }
    
// }


// student.greet()



// const car = {
//     brand: "toyota",
//     start : function() {
//         console.log(`${this.brand} is starting.......`);
//     },

// }


// car.start();




// student.calculateGrade = function (marks) {
//     return marks >= 50 ? "pass" : "fail";
    
// }



// console.log(student.calculateGrade(60));




// const key = "age";

// console.log(student[key]);



// const book = {
//     title: "JavaScript Basics",
//     author: "John Smith",
//     pages: 200,
//     read: false,
//     readBook: function() {
//         this.read = true;
//         console.log(`You have finished reading "${this.title}"!`);
//     }
// };

// console.log(book.title);  // Output: JavaScript Basics
// book.readBook();          // Output: You have finished reading "JavaScript Basics"!
// console.log(book.read);   // Output: true





// const student = {
//     name: "Tom",
//     marks: [80, 90, 85],
//     calculateAverage: function() {
//         const total = this.marks.reduce((sum, mark) => sum + mark, 0);
//         return total / this.marks.length;
//     }
// };

// console.log(student.name); // Output: Tom
// console.log(student.calculateAverage()); // Output: 85








//Object Destructuring



// const student = {
//     name: "Tom",
//     age: 20,
//     marks: 'A'
// }





// const { name, age, marks } = student;


// console.log(name);
// console.log(age);


// const student = {
//     name: "Tom",
//     grade: 'A'
// }

// // const { name, age= 18, grade } = student;

// // console.log(student);
// // console.log(age);

// const { name: studentName, grade: studentGrade } = student;



// console.log(student.name);







//Function Parameters with Destructuring

const displayStudent = ({ name, grade }) => {
    console.log(`Name: ${name}, Grade: ${grade}`);
};

const student = {
    name: "Tom",
    grade: "A"
};

displayStudent(student); // Output: Name: Tom, Grade: A



