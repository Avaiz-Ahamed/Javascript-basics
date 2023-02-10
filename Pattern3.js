/*     print the pattern
    ****
    ***
    **
    *    
*/

let Str = "****";
for (var i = 1; i <= 4 ; i++) {

  console.log(Str);
  var newStr = Str.substr(0, Str.length - 1);
  Str = newStr;
}


