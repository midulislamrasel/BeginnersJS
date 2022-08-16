function highestScore(score){
    var highest = score[0];
    for(var i = 1; i < score.length; i++){
        if (highest < score[i]) {
            highest = score[i];
        }
    }
    return highest;
}

var result = highestScore([20, 30, 44, 3, 155, 0, 56]);
console.log(result);

//task8

function highestScore(scores) {
    var max = scores[0];
    for (let x = 1; x < scores.length; x++) {
        if (max < scores[x]) {
            max = scores[x];
        }
    }
    return max;
}
var scores = [50,20,40,20,70,12,42]
var maxScore = highestScore(scores)
console.log(maxScore)