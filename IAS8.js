//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
////
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
//Return the provided character as the first element in each array.
//
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    var pairs =[['A','T'],['T','A'],['G','C'],['C','G']]
    str = str.split('')
    for(var i = 0; i<str.length;i++){
        for(var j=0; j<pairs.length;j++){
            if(str[i] === pairs[j][0]){
                str[i] = pairs[j]
            }
        }
    }
    return str;
}

pairElement("GCG");

////pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("ATCGA"))
////pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("TTGAG"))
////pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
console.log(pairElement("CTCTA"))