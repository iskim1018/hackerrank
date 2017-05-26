function quicksort(values) {
    const p = values[0];
    const slice = values.slice(1);

    let left = [], right = [];
    for (let i = 0; i < slice.length; i++) {
        const val = slice[i];
        if (val < p) {
            left.push(val);
        } else {
            right.push(val);
        }
    }

    if (left.length > 1) {
        left = quicksort(left);
    }

    if (right.length > 1) {
        right = quicksort(right);
    }

    left.push(p);
    const result = left.concat(right);
    console.log(result.join(" "));
    return result;
}

function processData(input) {
    const lines = input.split("\n");
    const n = parseInt(lines[0]);
    const values = lines[1].split(" ").map(Number);

    const result = quicksort(values);
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
