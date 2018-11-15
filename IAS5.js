//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str){
    //Many chained methods
    //1: scan the string and if there is a lowercase followed immediately by uppercase, replace with uppercase followed by lowercase.
    
    //2.lower case the entire string.
    
    //3.replace white spaces and underscores with hyphens
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace((/\s+|_+/g),'-');
  return str;
}


//spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
console.log(spinalCase('This Is Spinal Tap'));

//spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
console.log(spinalCase('thisIsSpinalTap'));

//spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
console.log(spinalCase('The_Andy_Griffith_Show'));

//spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
console.log(spinalCase('Teletubbies say Eh-oh'));

//spinalCase("AllThe-small Things") should return "all-the-small-things".
console.log(spinalCase('AllThe-small Things'));