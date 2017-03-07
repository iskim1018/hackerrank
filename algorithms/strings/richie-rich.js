process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var number = readLine();

    var numberLen = number.length;
    var halfLen = parseInt(number.length / 2);

    var isEven = number.length % 2 == 0;
    var medianChar = "";
    if (!isEven) {
        medianChar = number.charAt(halfLen);
    }

    var firstHalf = number.substring(0, halfLen);
    var lastHalf = "";

    if (isEven) {
        lastHalf = number.substring(halfLen);
    } else {
        lastHalf = number.substring(halfLen + 1);
    }

    var changeValues = [];
    var changeCount = 0;
    var maxVal = 9;

    for(var i = 0; i < halfLen; i++) {
        var firstVal = firstHalf[i];
        var lastVal = lastHalf[halfLen - 1 - i];

        var obj = {
            idx: i,
            isChange: false,
            val: parseInt(firstVal)
        }

        if (firstVal != lastVal) {
            obj.isChange = true;
            obj.val = Math.max(firstVal, lastVal);

            changeCount++;
        }

        changeValues.push(obj);
    }

    if(changeCount > k) {
        console.log(-1);
        return;
    }

    if(changeCount < k) {
        var availableCount = k - changeCount;

        for (i = 0; i < changeValues.length; i++) {
            var cVal = changeValues[i];
            if (!cVal.isChange && availableCount > 1 && cVal.val < maxVal) {
                cVal.val = maxVal;
                availableCount = availableCount - 2;
            } else if(cVal.isChange && availableCount > 0 && cVal.val < maxVal) {
                cVal.val = maxVal;
                availableCount = availableCount - 1;
            }
        }

        if (!isEven && availableCount > 0) {
            medianChar = "9";
            availableCount--;
        }
    }

    var result = "";
    for (i = 0; i < changeValues.length; i++) {
        result += changeValues[i].val;
    }

    if (!isEven) {
        result += medianChar;
    }

    for(i = 0; i < changeValues.length; i++) {
        result += changeValues[halfLen - 1 - i].val;
    }

    console.log(result);
}
