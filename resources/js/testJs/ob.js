var Sales = "Toyota";

function CarTypes(name) {
    if (name === "Honda") {
        return name;
    } else {
        return "Извините, мы не продаём " + name + ".";
    }
}

var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
