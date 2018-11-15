function pairElement(str) {
  var paired = []

  var search = function(char){
    switch(char){
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'G':
        paired.push(["G", "C"]);
        break;
      case 'C':
        paired.push(["C", "G"]);
        break;
    }
  }
  for(var i=0; i<str.length;i++){
    search(str[i])
  }
  return paired;
}

console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))