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

//This is your function
function gcd(left, right){
    max = Math.max(left, right);
    min = Math.min(left, right);

    rem = max % min;
    max = min; 
    min = rem;
    if(rem === 0) {
        return max; // return the max variable for GCD
    } 
    else {
        return  gcd(max,min);
    }
}

function lcm(a,b){
    return (a*b)/gcd(a,b);
}

function lcmLoop(arr, len){
    if (len === 1) {
        return arr[0];
    } else if(len === 2){
        return lcm(arr[0],arr[1])
    } else{
        return lcm(arr[len-1],lcmLoop(arr,len-1))
    }
}

function getTotalX(a, b) {
    let cnt = 0;

    const max = Math.max(...b);
    const cv = lcmLoop(a, a.length);

    for (let v = cv ; v <= max; v += cv) {
        let isMod = true;

        for (let i = 0; i < b.length; i++) {
            if (b[i] % v != 0) {
                isMod = false;
            } 
        }

        if (isMod) {
            cnt++;
        }
    }
    
    return cnt;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    
    process.stdout.write(""+total+"\n");

}
