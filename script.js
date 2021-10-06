// 1. 
let cars=['audi','bmw','lexus','volkswagen','porsche','audi']
for(let i=1; i<cars.length-1; i++){
    console.log(cars[i]);
}


// 2.
let names=['Elene', 'Nino', 'Eka', 'Ia','Salome', 'Vika']
for(let i=0; i<names.length; i++){
    if(names[i].length>3){
        console.log(i); 
    }
}

// 3.
let numbers=[7,8,12,13,16,25,28]
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        console.log(numbers[i]);
    }
}


for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==1){
        console.log(numbers[i]);
    }
}

// 4.
let number=[15,67,100,5,7,[80,500]]
    console.log(number[5][1]);

// 5.
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
console.log(person.eyecolor);  

// 6.

// a)
let dogs=['Viki','Niki', 'Kiki', 'Miki', 'Riki']
for(let i=0; i<dogs.length; i++){
    console.log(dogs[i]);
}
// b)
let cats=['andi','fendi', 'sendi', 'kendi']
let i=0;
while (i<cats.length) {
    console.log(cats[i]);
    i++;
}
// c)
let pats=['bony', 'boby', 'roby', 'coby']
pats.forEach(function (item) {
    console.log(item);
});

// 7.
// a)

var kids=['eva', 'lizi', 'sali', 'dima', 'nika']
if (kids.length===5 && kids[kids.length-1]==='nika') 
{
    console.log('მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა".');
}

// b)
var baby=['sandro', 'giorgi', 'andro', 'rezo']
if (baby.length===7 || baby[0]==='sandro')
{
    console.log('მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო".');
}
