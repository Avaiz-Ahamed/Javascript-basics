/*print the pattern 
       *
      **
     ***
    ****
*/


var i="    ";
var j=1;

for(j=1; j<=4; j++)
{
    var newStr = i.substr(0, i.length - 1);
    console.log(newStr)
    for(var k=1; k<=4; k++)
    {
        console.log("*")
    }
}   //output not coming