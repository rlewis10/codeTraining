
function chunkArrayInGroups(arr, size) {
    subarr = [];
    while(arr.length)
        {subarr.push(arr.splice(0,size))}
    return subarr;
}



console.log(JSON.stringify(chunkArrayInGroups(["a", "b", "c", "d"], 2)));
console.log(JSON.stringify(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)));
console.log(JSON.stringify(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)));
console.log(JSON.stringify(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)));
