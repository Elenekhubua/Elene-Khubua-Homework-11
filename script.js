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