//Translate the provided string to pig latin.
//
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
//If a word begins with a vowel you just add "way" to the end.
//
//Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str){
    var vowels = ["a", "e", "i", "o", "u"]
    var wordArray = str.split('')
    var cutoff =""
    if(vowels.includes(str[0])){
        return str = str + "way"
    } else {
    for(var i=0; i<wordArray.length; i++){
        if(!vowels.includes(wordArray[i])){
           cutoff+=wordArray[i]
           } else {break;}
        }
    }
    return str = str.substr(cutoff.length) + cutoff + "ay"
}




//translatePigLatin("california") should return "aliforniacay".
console.log(translatePigLatin("california"))

//translatePigLatin("paragraphs") should return "aragraphspay".
console.log(translatePigLatin("paragraphs"))

//translatePigLatin("glove") should return "oveglay".
console.log(translatePigLatin("glove"))

//translatePigLatin("algorithm") should return "algorithmway".
console.log(translatePigLatin("algorithm"))

//translatePigLatin("eight") should return "eightway".
console.log(translatePigLatin("eight"))