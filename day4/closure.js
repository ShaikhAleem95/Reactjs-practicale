//A closure gives you access to an outer function's scope from an inner function.every function in js is closure.
function init(){
    var name="mozilla";//name is a local variable created by init
    function displayname(){
        //displayname()is the inner function that forms the closure
        console.log(name);//use variable declared in the parent function
    }
    displayname();

}
init();