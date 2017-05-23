String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function getNextWord(line) {
    var pivotIdx = line.length - 1;
    
    for (var i = pivotIdx; i > 0; i--) {
        if (line[i] > line[i-1]) {
            pivotIdx = i-1;
            break;
        }
    }
    
    var pivotChar = line[pivotIdx];
    var swapIdx = pivotIdx;
    
    for (var i = line.length - 1; i > pivotIdx; i--) {
        if (line[i] > pivotChar) {
            swapIdx = i;
            break;
        }
    }
    
    if (pivotIdx == swapIdx) {
        console.log("no answer");
    } else {
        var temp = line[swapIdx];
        
        line = line.replaceAt(pivotIdx, temp);
        line = line.replaceAt(swapIdx, pivotChar);
        
        var prefix = line.substr(0, pivotIdx + 1);
        var suffix = line.substr(pivotIdx + 1).split("").sort().join("");

        console.log(prefix+suffix);
    }
}

function processData(input) {
    //Enter your code here
    input_stdin_array = input.split("\n");
    var n = parseInt(input_stdin_array[0]);
    var strs = [];
    for (var i = 1; i <= n; i++) {
        var line = input_stdin_array[i];
        strs.push(getNextWord(line));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
