var number = [1,400,12,34,5];
var i = 0;
var total = 0;
while(i < number.length) {
    total = total + number[i];
    console.log(number[i]);
    i += 1;
}
console.log(`total = ${total}`);