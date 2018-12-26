const cars = [
  { id: 1, name: "Fusca", brand: "VW", price: 2000 },
  { id: 2, name: "Gol", brand: "VW", price: 12000 },
  { id: 3, name: "Sandero", brand: "Renaut", price: 20000 },
  { id: 4, name: "M3", brand: "BMW", price: 300000 }
];

//REDUCE
const totalPrice = cars.reduce((prevElem, elem) => prevElem + elem.price, 0);
totalPrice; //?
