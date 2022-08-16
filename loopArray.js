var num = [10, 25, 54, 2, 1, 45, 20, 14, 65, 32, 52, 32]

for (let i = 0; i < 11; i++) {
    // console.log(num[i])
}

// sum Array

var num = [10, 25, 54, 2, 1, 45, 20, 14, 65, 32, 52, 32]

var sum = 0;
for (let i = 0; i < 11; i++) {
    sum = sum + num [i]
}
// console.log("Sum = " + sum)



// User kache theke input niye Array Numbar jog korte hobe

var num = new Array();
for (let i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Enter a 5 Number : "))
}

var sum = 0;
for (let i = 0; i < 5; i++) {
    sum = sum + num[i]
}
console.log(sum)