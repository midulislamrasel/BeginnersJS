

//// 2D array

function highestRunScorer(playersInfo) {
    //  console.log(playersInfo)
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for (let x = 1; x < playersInfo.length; x++) {
        if (highestScore < playersInfo [x][1]) {
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;
}
var playersInfo = [
    ["Ashraful", 58],
    ["Mizan", 47],
    ["Rasel", 76],
    ["Khairul", 56],
    ["Mojahid", 47],
    ["Emaran", 53],
];
var name = highestRunScorer(playersInfo)

console.log(name)
