//Find the missing letter in the passed letter range and return it.
//
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    var strCompare = "abcdefghijklmnopqrstuvwxyz";
    var index = strCompare.indexOf(str[0])
    for(i = 0; i < str.length; i++){
        if(str[i] !== strCompare[index+i]){
            return strCompare[index+i];
        }
    }
    return undefined
}

//fearNotLetter("hijklmopq") should return "n"
console.log(fearNotLetter('hijklmopq'))

//fearNotLetter("abce") should return "d".
console.log(fearNotLetter("abce"))

//fearNotLetter("abcdefghjklmno") should return "i".
console.log(fearNotLetter("abcdefghjklmno"))

//fearNotLetter("stvwx") should return "u".
console.log(fearNotLetter("stvwx"))

//fearNotLetter("bcdf") should return "e".
console.log(fearNotLetter("bcdf"))

//fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))

