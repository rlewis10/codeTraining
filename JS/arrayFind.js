const states = [
  {"AZ": "Phoenix"},
  {"NY": "Albany"},
  {"VA": "Richmond"},
  {"CA": {a: "good", b: "bad"}}
]

let criteria = "CA"
let find = states.find(function(item){return Object.keys(item) == criteria})

var result = find[criteria]
console.log(JSON.stringify(result))