//Return an English translated sentence of the passed binary string.

//The binary string will be space separated.


function binaryAgent(str){
    //split the incoming string into an array of characters.
    var binary_array = str.split(' ');
    
    //set up a decimal array to accept the binary to decimal
    var decimal_array = []
    
    //convert each binary array element to a decimal.
    for(var i=0; i<binary_array.length; i++){
        decimal_array.push(parseInt(binary_array[i], 2))
    }
    
    //set up empty character_array to accept the decimal to char 
    var character_array = []
    //convert each decimal to a character using 'fromCharCode
    for(var i = 0; i<decimal_array.length; i++){
        character_array.push(String.fromCharCode(decimal_array[i]))
    }
    

    //join all the characters 
    var string = character_array.join('')
    console.log(string)
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") 
//should return "Aren't bonfires fun!?"

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") 
//should return "I love FreeCodeCamp!"