function checkCount(str) {
  const strArr = str.split("");
  const countMap = {};
  
  for (let i = 1; i < str.length; i++) {
    for (let j = 0; j <= str.length - i; j++) {
      const sub = str.substr(j, i);
      const sortedSub = sub.split("").sort().join("");
      if (countMap[sortedSub] === undefined) {
        countMap[sortedSub] = { cnt: 0, indices: [] };
      }

      countMap[sortedSub].cnt++;
      countMap[sortedSub].indices.push(j);
    }
  }


  let result = 0;
  Object.keys(countMap).forEach(function(key) {
    if (countMap[key].cnt == 2) {
      result++;
    } else if (countMap[key].cnt > 2) {
      result += (countMap[key].cnt * (countMap[key].cnt - 1)) / 2;
    }
  });

  console.log(result);
}

function processData(input) {
  const lines = input.split("\n");
  const n = lines[0];

  for (let i = 1; i <= n; i++) {
    checkCount(lines[i]);
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
