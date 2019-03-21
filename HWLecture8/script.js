console.log("1 ex: ");

function convert(amount) {
    let usd = 8;
    console.log(amount * usd);
}
convert(2) // 16

console.log("2 ex: ");

function reverse(str) { console.log('\u202E' + str); }
reverse('abc') // 'cba'

console.log("2 ex, second decision: ");

function reverses(str) {
    let newStr = '',
        i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
console.log(reverses('abc'));

console.log("3 ex: ");

function printStairs(n) {
    let strSharp = "";
    for (var i = 0; i < n; i++) {
        strSharp += "#"
        console.log(strSharp);
    }
    return strSharp;
}
printStairs(3)

console.log("4 ex: ");

function sumRange(start, end) {
    let sumR = 0;
    i = start;
    while (i < end + 1) {
        i++;
        sumR += start++;
    }
    console.log(sumR);
}
sumRange(2, 4) // 9
sumRange(-1, 3) // 5

console.log("5 ex: ");

function min(a, b, c) {
    if (a < b && a < c) {
        console.log(`min num: ` + a);
    } else if (b < a && b < c) {
        console.log(`min num: ` + b);
    } else {
        console.log(`min num: ` + c);
    }
}
min(10, 5, 11) // 5
min(3, 8, 4) // 3

console.log("6 ex: ");

function printPyramid(n) {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n - i; j++) {
            output += " ";
        }
        for (let k = 0; k <= i; k++) {
            output += "#";
        }
        for (let k = 0; k < i; k++) {
            output += "#";
        }
        console.log(output);
    }
}
printPyramid(3);

console.log("6 ex next decision: ");
const printPyramid = n => {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(2 * i + 1));
    }
}
printPyramid(5)

console.log("7 ex: ");

function firstAndLastToUpper(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str[1] + str[2].toUpperCase();
}
console.log(firstAndLastToUpper('abc')) // 'AbC'

console.log("8 ex: ");

function cursorCheck(str) {
    let a = "ironman";
    let b = "ostap";
    let c = "cursor";
    let strLC = str.toLowerCase();
    if (strLC.includes(a) || strLC.includes(b) || strLC.includes(c)) {
        return true;
    } else {
        return false;
    }
}
console.log(cursorCheck('Hello I am ostap')) // true
console.log(cursorCheck('Superman is here')) // false

console.log("9 ex: ");

function toUppercase(str) {
    str = str.toUpperCase();
    return str;
}
console.log(toUppercase('abc')) // 'ABC'

console.log("10 ex: ");
/*function removeDuplicationLetters(str) {
let strUC = str.toUpperCase();
let strLC = str.toLowerCase()
let curr_index = 0;
let curr_char;
let strSplit;
let found_first;
while (curr_char != '') {
  curr_char = str.charAt(curr_index);
  // Ігноримо пробіли
  if (curr_char == ' ') {
     curr_index++;
     continue;
  //якщо є пробіли додаємо
  }
  strSplit = str.split('');
  found_first = false;
  for (let i=0;i<strSplit.length;i++) {
    if(str.charAt(i) == curr_char && !found_first)
            found_first = true;
         else if (str.charAt(i) == curr_char && found_first) {
        //видаляю символи з регістром
        str = setCharAt(str,i,'');
     }
  }
  curr_index++;
}
return str;
}

function setCharAt(str,index,chr) {
if(index > str.length-1) return str;
return str.substr(0,index) + chr + str.substr(index+1);
}
console.log(removeDuplicationLetters('Hello I am Iron Man')) // 'Helo I am rn '
*/
function removeDuplicationLetters(str) {
    unique_char = str => str.split('').reduce((s, v) =>
        (!s.toLowerCase().includes(v.toLowerCase()) || v === ' ') ? (s + v) : s
    );
}
removeDuplicationLetters() // 'Helo I am rn '
console.log(unique_char("Hello I am Iron Man"))

console.log("11 ex: ");

function fibonacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonacci(3)) // 2
console.log(fibonacci(5)) // 5
console.log(fibonacci(7)) // 13