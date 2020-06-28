function mutation(arr) {
    var base = arr[0].toLowerCase()
    var test = arr[1].toLowerCase()
                     .split('')
                     .every(function(letters){
                        return base.indexOf(letters) !== -1
                    })
    return test
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hello"]));
