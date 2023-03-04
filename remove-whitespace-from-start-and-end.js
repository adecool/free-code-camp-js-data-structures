let hello = "   Hello, World!  ";
let wsRegex = /\s{3}(\w+).\s(\w+).\s{2}/; // Change this line
let result = hello.replace(wsRegex, "$1, $2!"); // Change this line