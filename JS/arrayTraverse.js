function largestOfFour(arr) {
      return arr.map(function(val){
        return val.reduce(function(acc, innerVal){
           if(acc < innerVal)
           return acc = innerVal;
           else return acc
        },[])
      })
    }
    var seq = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    
    console.log(JSON.stringify(largestOfFour(seq)));