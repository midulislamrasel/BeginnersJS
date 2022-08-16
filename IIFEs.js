// IIFEs (Immediately invokeable Function Expressions)

(function display(a, b) {
    sum = a + b;
    console.log(sum)
})(15, 81)

// Function Expressions

var display2 = function displayMass() {
    console.log("This is message")
};

display2()



// (),{},[],<>
// Task 7 : create an IIFEs that print sum of 2 numbers