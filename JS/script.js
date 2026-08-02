/*
alert("Hello, World");
console.log("Also Hello, World");
*/
let a = 0;
var b = 1;
const c = 2;

for(let i = 0;i<15;i++){
    if (i%2 == 0) {
        console.log("Even Number\n");
        continue;
    }else if(i == 11){
        break;
    }
    console.log(i);
}
while(a < 12){
    console.log("Still Smaller");
    console.log(a);
    a++;
}

do {
    console.log(b);
    b++;
}while(b<10)

function greet(name){
    return `Greetings! ${name}`
}
function greetTwo(name){
    return "Greetings! " + name;
}
console.log(greet("Github"));
console.log(greetTwo("Github"));

greetings = (name)  => {
    return  "Greetings! " + name;
}

console.log(greetings("Daksh Madaan"))

big = 123456789987654321n;
console.log(big,typeof big);

str = "Playing with a string"

console.log(str.length, str.toUpperCase(), str.toLowerCase(),str.indexOf("String"),str.lastIndexOf('g'),str.slice(5,16),str.substr(5,16),str.replace("Playing","Not playing"));

let d = 9, g = 3;
console.log(d**g,(d>g?"d is bigger":"d is not bigger"))
/*
d**=3
d/=3
d*=3
d+=3
d-=3
d%=3
 */ 
console.log(d);
console.log(80/10,80.0/10,80.0/10.0,80/10.0);
console.log("Hello"*5);
console.log("Will this print 5 times? - It didn't :(")*5;

document.write(`<h1>hehehehe</h1>`);

let chess = ["Bishops","King","Queen","Knights","Rooks","Pawns"];
chess.pop();
chess.push("Pawns but this was deleted for the record");
console.log("2nd index:", chess.at(2));
for(let y = 0;y<chess.length;y++){
    console.log(chess[y]);
}

chess.map((element) => console.log(element.toUpperCase()));

console.log(chess.map((element) => element.toUpperCase()));

chess.map((element) => element.toUpperCase())
display(chess)
// also works on copies

let nums = ['one','two','three',"four",`five`];
console.log(nums.filter((element) => element.length == 3))
console.log(nums.forEach((element) => element.toUpperCase()))

function display(arr){
    for(let y = 0;y<arr.length;y++){
        console.log(arr[y]);
    }
}

nums.forEach((element) => element.toUpperCase());
display(nums);
// didn't work as forEach doesn't affect the original & does't return anything, use below code to achieve above tried
nums.forEach((element) => console.log(element.toUpperCase()));


display(nums);
// still didn't affect original

let nested = [1,[2,3]];
display(nested)

nested = nested.flat();
display(nested)
console.log(nums.join(`,`));
let arr = (nums.join(`,`)).split(`,`);
display(arr);

arr.shift();
display(arr);

arr.unshift("one again")
display(arr);

if((1==1 && 0==0)||(6==6)){
    console.log(1==1);
}

console.log(6&3,3|6);
console.log(
    ("Daksh").includes("D")
);
console.log("a">"z", "Donald">"Joe")

console.log("== is loose comparison as '25'==25 is also true",'25' == 25);
console.log("=== is strict comparison as '25'===25 is false",'25' === 25);

let o = 4;
console.log(typeof o);
o = Number(o);
console.log(typeof o);
o = String(o);
console.log(typeof o);
o = Boolean(o)
console.log(typeof o);
o = BigInt(o)
console.log(typeof o);


console.log(Number("SEVEN"));