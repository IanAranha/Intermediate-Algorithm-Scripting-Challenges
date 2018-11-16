//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  
    return str = str.replace(/&+/g, '&amp;').replace(/<+/g, '&lt;').replace(/>+/g, '&gt;').replace(/"+/g, '&quot;').replace(/'+/g, '&apos;')
}

//convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
console.log(convertHTML("Dolce & Gabbana"))
//convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
//convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
console.log(convertHTML("Sixty > twelve"))
//convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML('Stuff in "quotation marks"'))
//convertHTML("Schindler's List") should return Schindler&​apos;s List.
console.log(convertHTML("Schindler's List"))
//convertHTML("<>") should return &​lt;&​gt;.
console.log(convertHTML("<>"))
//convertHTML("abc") should return abc.
console.log(convertHTML("abc"))





