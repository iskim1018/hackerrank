function processData(input) {
  //Enter your code here
  const lines = input.split("\n");
  const n = lines[0];
  const values = lines[1].split(" ");

  for (let i = 1; i < n; i++) {
    let j = i;

    while(j > 0 && parseInt(values[j - 1]) > parseInt(values[j])) {
      let temp = values[j];
      values[j] = values[j-1];
      values[j-1] = temp;
      j--;
    }
    console.log(values.join(" "));
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
