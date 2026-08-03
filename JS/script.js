//alert("Hello, World");

console.log("Also Hello, World");
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

function greet(name = "Default"){
    return `Greetings! ${name}`
}
function greetTwo(name = "Default"){
    return "Greetings! " + name;
}
console.log(greet("Github"));
console.log(greetTwo());

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

let fnExp = function(){
    
    return "This is a Function Expression."
}
console.log(fnExp())

if("Daksh" === "Daksh"){
    let r = 6;
    var t = 70;
    console.log("Testing Var vs Let")
}

// console.log(r); - r is not defined; let is block scoped
console.log(t);
printOne();
//printTwo();
//printThree();
function printOne(){
    console.log(`1; Notice how this can be called before declaration`);
}

let printTwo = function() {
    console.log(`2; Notice how this CANNOT be called before declaration`);

}

let printThree = () =>{
    console.log(`3; Notice how this CANNOT be called before declaration`);
 
}

let minimal = num => 1+num
console.log(minimal(1))

// OBJECTS

let library = {
    books: 1000000,
    maintainers: 26,
    location: "Kharar, SAS Nagar, Punjab, India",
    email: 'khararlibrary@libraries.com',
    phone: '8568234856',

    methodOne: function(){
        console.log(`this is a method of library ${this.books}`)
    },
    methodTwo() {
        console.log(`this is another method of library ${this.maintainers}`)
    }
}
console.log(typeof library,library, library.location);
library.books = 10000001
console.log(library.books,library['books']);
library.methodOne()
library.methodTwo()

let arrayofObj = [
    {title: "BookOne", pages: 750, author:"a",displaypages(){return (this.pages)}},
    {title: "BookTwo", pages: 250, author:"n",displaypages(){return (this.pages)}},
    {title: "BookThree", pages: 720, author:"j",displaypages(){return (this.pages)}},
    {title: "BookFour", pages: 75, author:"l",displaypages(){return (this.pages)}},
]

console.log(arrayofObj, arrayofObj[1].displaypages());

console.log(Math.round(Math.PI))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.trunc(4.9))
console.log(Math.abs(-4.9))
// RANDOM NO
console.log(Math.round(Math.random()*100))

 // Primitive & Reference Types
let u = 5;
let v = u;
console.log(`u:${u} & v:${v}`);
v++;
console.log(`u:${u} & v:${v} // Only v Changed`);

let objOne = {attribute1: 6}
let objTwo = objOne;
console.log(`onjOne:${objOne.attribute1} & objTwo:${objTwo.attribute1}`);

objOne.attribute1 ++;
console.log(`onjOne:${objOne.attribute1} & objTwo:${objTwo.attribute1} // BOTH CHANGED`);

links = [
    {platform:"GitHub",link:"https://github.com/Daksh-Madaan"},
    {platform:"X",link:"https://x.com/_dakshmadaan"},
    {platform:"LinkedIn",link:"https://linkedin.com/dakshmadaan"},

]
document.write(`<h1>Daksh Madaan</h1>`);

let div = document.querySelector('.links')
links.map(element => div.innerHTML += `<a class="anchors" style="margin:10px" target="_blank" href=${element.link}>${element.platform}</a>`)

let para = document.getElementById('para')
para.innerText += " - This is the added text"

let heading = document.getElementsByClassName('heading')[0] // list
heading.innerHTML += " - This is the added text"

let btn = document.getElementsByTagName('button')[0]
btn.innerHTML += " - Added Via JS"

let attributeManipulation = document.getElementsByClassName("anchors");
console.log(attributeManipulation[0].getAttribute('href'))

attributeManipulation[0].setAttribute('style',"margin:10px; color:red")

function bgGreen(tag){
    document.getElementsByTagName(tag)[0].style.background = '#9CAF88'
}

console.log(heading.classList);
heading.classList.remove("removeThisClass")
console.log(heading.classList);
heading.classList.add("addedViaJS")
console.log(heading.classList, heading.classList.contains("addedViaJS"),heading.innerText.includes("here"));

console.log(heading.innerText,heading.textContent)

heading.classList.toggle("addedViaJS")
console.log(heading.classList);