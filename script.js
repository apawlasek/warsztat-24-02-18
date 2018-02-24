console.log('buka!')

// data types in js

//js jest dynamicznie typowany (opp. twardotypowany)

//primitives:

// string
var textVariable = "huba";

// number

var numVariable = 1.3;

//boolean

var boolVariable = true;

//null
var boolVariable = null; //jest zdef, ale jest brak

//undefined

var boolVariable = undefined; //niezdefiniowany, nigdy nie istniał

//end of non-objects.

// nonprimitives:

var simplestObj = {
    name: "Ania",
    lastname: "P"
}

console.log(simplestObj);

//nested objects

var nestedObj = {
    name : "ania",
    car: {
        brand: "opel",
        model: "asterka"
    }
}

console.log(nestedObj.car.model);

// arrays

var simpleArray = [1,2,3,4];
console.log(simpleArray);


//  .name = ['name']