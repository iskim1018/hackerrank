function processData(input) {
    const lines = input.split("\n");
    const n = parseInt(lines[0]);
    const values = lines[1].split(" ");
    
    const left = [];
    const equal = [];
    const right = [];
    
    var pivot = parseInt(values[0]);
    
    for (let i = 0; i < values.length; i++) {
        var val = parseInt(values[i]);
        if (val < pivot) {
            left.push(val);
        } else if (val > pivot) {
            right.push(val);
        } else {
            equal.push(val);
        }
    }
    
    console.log(left.concat(equal).concat(right).join(" "));
    //Enter your code here
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
