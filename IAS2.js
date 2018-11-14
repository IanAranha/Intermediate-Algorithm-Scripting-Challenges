//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//Note
//You can return the array with its elements in any order.
//
//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.

//["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].


//["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

//["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].

//[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].

//[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].

//[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

///////Different approach/////////


function diffArray(arr1, arr2){
    return arr1.concat(arr2).filter(function(e) {return !arr1.includes(e) || !arr2.includes(e)})
}


/////////////////////////////////////




//function diffArray(arr1, arr2) {
//    var newArr = [];
//    for(var i=0; i<=arr1.length-1; i++){
//        if(arr2.includes(arr1[i])){
//            continue;
//        } else { newArr.push(arr1[i])} 
//    }
//    for(var i=0; i<=arr2.length-1; i++){
//      if(arr1.includes(arr2[i])){
//          continue;
//      } else { newArr.push(arr2[i])} 
//  }    
//  return newArr;
//}

//[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

//["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

//["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));

//[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));

//[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
    
    
    
    
    
    
    
    