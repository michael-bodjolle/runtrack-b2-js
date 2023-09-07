function myCountChar(haystack, needle){

 let occurence = 0;
 for(let i= 0; i <= haystack.length; i++){
    if(haystack[i] === needle)

    occurence++

 }

return occurence
}

console.log(myCountChar("hello world", "o"));
