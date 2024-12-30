

function a(){
    var b=7;
    function c(){
        console.log(b);
    }
    c();
}

a();

// example of closure

function outer(){
    var a=12,b=8;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer()();// this is simillar to var ans=outer(); the run ans();

// advantage of closure
// 1. encapsulation and data hiding
// example
console.log(a);
// console.log(b);  b is not defined here

function Counter(){
    var count=0;
    console.log(count);
    this. increaseCount=function (){
        count++;
        console.log(count);
    }

    this. decreaseCount=function (){
        count--;
        console.log(count);
    }
}

Counter();  //it work as a function

var count1=new Counter();  //it work as an object whe we use new keyword
count1.increaseCount();
count1.increaseCount();
count1.increaseCount();
count1.decreaseCount();
count1.decreaseCount();
count1.increaseCount();
count1.increaseCount();


document.getElementById("clickme").addEventListener("click",function btn(){

    console.log("Button clicked");
});









    









