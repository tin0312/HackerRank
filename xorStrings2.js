process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    function strings_xor(s, t) {
        let xorString = ""; // Initialize an empty string to store result after XOR 
        // Iterate the string s
        for (let i = 0; i < s.length; i++) {
            xorString += s[i] === t[i] ? "0" : "1"; // XOR operation
        }
        return xorString;
    }

    console.log(strings_xor(s, t));
});
