// JavaScript File

var n = Number(prompt("enter the number Fibonacci"));

function f(n) {
      var a = 1,
          b = 1;
      for (var i = 3; i <= n; i++) {
        var c = a + b;
            a = b;
            b = c;
      }
      return b;
    }
    document.write('number Fibonacci = ' + f(n));
    