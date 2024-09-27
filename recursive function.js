// console.log(x)
// const x=12;


const higherorderfunction =(callback)=>{
    console.log("higherorderfunction");
    callback()
}
const callbackfunction =()=>{
    console.log("callbackfunction");
}
higherorderfunction(callbackfunction)


const  filterFunction = (Array,condition)=>{
return Array.filter(condition)
}
const numbers = [1,2,3,4,5,6]

const evennumbers = filterFunction(numbers,num=>num%2===0)
console.log(evennumbers);


// ----------------spread operator------------------- 
const arr = [1,2,3,4,5,6,7]
const array = [...arr,12,3,4,34]    
console.log(array);

// ----------------spread operator  merging------------------- 
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9]
const combine = [...arr1,...arr2]
console.log(combine);
// ---------------------spread operator objects---------------------------- 
const person = {
    name:"Ali",
    age:23,
}
const updatePerson = {...person,city:"Lahore"}
console.log(updatePerson);


// -----------------rest_operators-------------------
const sum = (...number)=>{
    return number.reduce((total,num)=>total+num)
}
console.log(sum(1,2,3,3,2,222,22222,33333,32323,));


// ----------------Array Destructuring---------------------- 
const  numb =[12,23,43,45,45]
const [a,b,c,d,e,f]=numb
console.log(d);

// const [a,,b,,c] = numb
// console.log(c);
// ----------------object Destructuring---------------------- 

const persons = {
    name:"Bilal",
    age:23
}
const {name ,age} = persons
console.log(name , age);

// -----------------object Destructuring-renameing--------------------

const {name:firstname, age:BOD} = persons
console.log(firstname,BOD);



const arrray2 = [1,2,3,4,5,6,7,8,9,0];
const [ ...rest] = arrray2;
console.log(rest);


// --------------------------------------------------------------- 
const outerfunction = ()=>{
    let outerveriables = `i m the outerFunction`
    const innerfunction = ()=>{
        console.log(outerveriables);
        
    }
    return innerfunction;
}
const clouserfunction = outerfunction();
clouserfunction();



function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();



//   ---------------------recursive fuction-------------------------------- 
const dosomething =(n)=>{
    if ( n===0) {
        console.log("task completed");
        return
    }   
    console.log("i m doing somethiong");
    dosomething(n-1)
}
dosomething(3)

//   --------------------recursive fuction----find factorail--------------------- 
const factorail = (n)=>{
    if (n===0) {
        return 1;
    }
    return n*factorail(n-1);
}
console.log(factorail(4));

//   ---------------------recursive fuction----flat array--------------------- 
const flatArray = (arr)=>{
let result = [];
arr.forEach(element =>{
    if (Array.isArray(element)) {
        result = result.concat(flatArray(element));
    }else{
        result.push(element);
    }
})
return result;
}
const nestedArray = [1, 2, [3, 4 ,5], 6];
const flattArray = flatArray(nestedArray);
console.log(flattArray);




const sumArray = (sum)=>{
if (sum.length===0) {
    return 0;
}
return sum[0]+sumArray(sum.slice(1))
}
const arrayy = [1,2,3,4,5];
const totalsum = sumArray(arrayy)
console.log(totalsum);
