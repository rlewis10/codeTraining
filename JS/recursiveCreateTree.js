let categories =[
  {id: 'food', parent: null},
  {id: 'fruit', parent: 'food'},
  {id: 'veg', parent: 'food'},
  {id: 'diary', parent: 'food'},
  {id: 'apple', parent: 'fruit'},
  {id: 'pear', parent: 'fruit'},
  {id: 'potato', parent: 'veg'},
  {id: 'tomato', parent: 'veg'},
  {id: 'milk', parent: 'diary'},
  {id: 'cheese', parent: 'diary'},
  {id: 'brie', parent: 'cheese'}
]

let maketree = function(categories, parent){
  let node = {}
  categories.filter((c) => {return c.parent === parent})
            .forEach((c) => {return node[c.id] = maketree(categories, c.id)})
  return node
}


let NewTree = maketree(categories, null)
console.log(JSON.stringify(NewTree.food.diary.cheese.brie))