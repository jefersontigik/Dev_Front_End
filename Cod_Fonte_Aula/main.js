// JavaScript to illustrate eval() function
function func() {
 
    // Original string
    let a = 4;
    let b = 4;
 
    // Finding the multiplication
    let value = eval(new String(a * b));
    console.log(value);
}
// Driver code
func();