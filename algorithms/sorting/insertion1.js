function processData(input) {
  //Enter your code here
  const lines = input.split("\n");
  const n = lines[0];
  const values = lines[1].split(" ");

  for (let i = (n - 1); i > 0; i--) {
    let item = parseInt(values[i]);

    for (let j = (i - 1); j >= 0; j--) {
      if (item < parseInt(values[j])) {
        values[j+1] = values[j];

        console.log(values.join(" "));
        values[j] = item;
      } else {
        break;
      }
    }
  }

  console.log(values.join(" "));
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
