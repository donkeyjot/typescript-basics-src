const pizzas = [
  {name:'Pepperoni', toppings: ['pepperoni']}
];

const mappedPizzaz = pizzas.map((pizza) => pizza.name.toUpperCase());

  console.log(mappedPizzaz);

function multiply(a, b) {
  return a*b
}

console.log(multiply(5,6));
console.log(multiply(3,7));