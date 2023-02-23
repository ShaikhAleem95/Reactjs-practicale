
var result;
function sum(a,b)
{
    //console.log(result);
    //function scope
    var result=a+b;
    console.log(result);
}
sum(4,5);
//this will throw refrence error   t
//console.log(result);