//vowel || consonant

var letter = prompt("Enter a letter");
letter = letter.toLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log("vowel");
}
else
    console.log("consonant")