//crate obj with properties
let car = {};
console.log(typeof car);

//assign properties
car.make = 'ford';
console.log(car);

//assign properties
car.model = 'mustang';
console.log(car);

console.log(car.model + " this is the car model");


//create obj with propertie
let cohort = {
    name: 'fortran',
    startDate: '02/27/2022',
    endDate: '07/31/2022'
}

console.log(cohort.name);


//accesing properties
console.log(Object.keys(car));
car.year = '1998';

console.log(Object.keys(car));


//accesing to cohort obj
console.log(Object.keys(cohort));


//IN Keyword
///HELPFUL

if (!('car.numOfWheels' in car)) {
    car.numOfWheels = 4;
}
console.log(car);


//nested values

let elixirCohort = {
    name: 'Elixir',
    startYear: '2021',
    students: ['hector', 'david', 'brendan'],
    hasGraduated: false
}

//access the array within the object
console.log(elixirCohort.students);

console.log(elixirCohort.hasGraduated);
elixirCohort.hasGraduated = true;

console.log(elixirCohort.hasGraduated);

//objects within objecs

elixirCohort.students = [
    {
        name: 'Ry',
        age: 27
    },
    {
        name: 'casey',
        age: 27
    },
    {
        name: 'Docrob',
        age: 40
    }
];

console.log(elixirCohort.students);
console.log(elixirCohort.students[0].name);


console.log("--------------------------------------")
//assigning behavior to the object;

car.honk = function (){
    console.log("honk honk")
}

car.honk();

elixirCohort.printAllStudentsNames = function (){
    // console.log(this.students);
    this.students.forEach(function (student){
        console.log(student.name);
    })
}
elixirCohort.printAllStudentsNames();
















