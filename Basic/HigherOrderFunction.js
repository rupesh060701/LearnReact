// w.a.p to calculate area, circumference and diameter of circle, radius of circles are given in array;


let radius = [2, 4, 1, 5];

let area = function (rad) {
    return Math.PI * rad * rad;
};

let circumference = function(rad){
    return  2*Math.PI * rad;
};

let diameter=function(rad){
    return 2*rad;
}

let calculate=function(radius,logic){
    let output=[];
    for(let i=0;i<radius.length;i++)
    {
        output.push(logic(radius[i]).toFixed(2));
    }
    return output;
}


Array.prototype.calculate2=function(logic){
    let output=[];
    for(let i=0;i<this.length;i++)
    {
        output.push(logic(this[i]).toFixed(2));
    }
    return output;
}


console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// use map function
console.log(radius.map(area));
console.log(radius.calculate2(circumference))




let radi = [2, 4, 1, 5];
let diameters = radi.map(function (r) { return 2 * r });
console.log(diameters);

let triples = radi.map((r) => 3 * r);
console.log(triples);

let binary = radi.map((r) => r.toString(2));
console.log(binary);

// use of filter

let evens = radi.filter((r) => r % 2 === 0);
console.log(evens);

// use of reduce: sum,max,min

let sumradi = triples.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(sumradi);
let maxradius=radi.reduce(function(acc,curr){
    if(curr>acc)
        acc=curr;
    return acc;
},0);

// another way to write it
let maxRadi = radi.reduce((acc, curr) => curr > acc ? acc = curr : acc = acc, 0);

console.log(maxradius);
console.log(maxRadi);


const users=[
    {firstname:"Rupesh",lastname:"Kumar",age:26},
    {firstname:"Mayank",lastname:"Kumar",age:50},
    {firstname:"Lakshya",lastname:"Raj",age:47},
    {firstname:"Ravi",lastname:"Verma",age:26},
    {firstname:"Nitesh",lastname:"Kumar",age:26},
]

const userName=users.map((x)=> x.firstname+" "+x.lastname);
console.log(userName);

const countFreq=users.reduce(function(acc,curr){

    if(acc[curr.age])
    {
        acc[curr.age]+=1;
    }else{
        acc[curr.age]=1;
    }
    return acc;

},{});

console.log(countFreq);

// first name of all people whose age is less than 30;
const outputMethod1=users.filter(function(user){
    if(user.age<30)
        return user;
}).map(function(x){
    return x.firstname;
});

const outpuMethod2=users.filter(user=>user.age<30).map(x=>x.firstname);


console.log(outputMethod1);

let Method3=users.reduce((acc,curr)=>{
    if(curr.age<30)
    {
        acc.push(curr.firstname);
    }
    return acc;
},[])

console.log(Method3);