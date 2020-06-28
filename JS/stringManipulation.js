
function confirmEnding(str, target) {
    var Str = str.substr(target.length);
    return Str
}

/*
str.substr(-target.length) === target
*/

/*
function confirmEnding(str, target) {
    var splitStr = str.split(target);
    if(splitStr[splitStr.length-1] == "")
        return true;
    else 
        return false;
}
*/

console.log(confirmEnding("Connor", "or"));

