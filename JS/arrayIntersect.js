var products = [
 {Item: 'John Doe', Price: 16 },
 {Item: 'Thomas Calls', Price: 19 },
 {Item: 'Liam Smith', Price: 20 },
 {Item: 'Jessy Pinkman', Price: 18 }
];

var coffeeLovers = [
  'John Doe',
  'Liam Smith',
  'Jessy Pinkman'
];


let validItems = products.filter(function (x){return coffeeLovers.includes(x.Item)})
                         .reduce(function (total, x){ return total + x.Price},0)

console.log(JSON.stringify(validItems))