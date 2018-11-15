//Translate the provided string to pig latin.
//
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
//If a word begins with a vowel you just add "way" to the end.
//
//Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str){
    var vowels = /[aeiou]/gi;
    if(str[0].match(vowels)){
        return str = str + "way"
    } else if(str.match(vowels) === null){
            return str = str + "ay"
        } else {
            var vowelIndex = str.indexOf(str.match(vowels)[0])
            return str = str.substr(vowelIndex) + str.substr(0,vowelIndex) + "ay"
        }
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