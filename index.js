// JavaScript File

var n = Number(prompt("enter the number Fibonacci"));

function f(n) {
    var x1 = 1,
        x2 = 1;
    for (var i = 3; i <= n; i++) {
        var x = x1 + x2;
        x1 = x2;
        x2 = x;
    }
    return x2;
}
document.write('number Fibonacci = ' + f(n));