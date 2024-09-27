const nastedArray = [1,2,3,[4,5],[6,7,8],[9,10,[11,12,[13,14,[2,3,4,5]]]]]
const flatArray = (arr)=>{
if (arr.length===0) {
    return []
}
const [first,...remaing] = arr;
return (Array.isArray(first)
?[...flatArray(first),...flatArray(remaing)]
:[first,...flatArray(remaing)]
)
};
const result = flatArray(nastedArray)
console.log(result);




    // var a=0,b=1;
    // for (let i = 0; i < 10; i++) {
    //     var temp = a+b; //2
    //     a=b;//1
    //     b=temp//2
    //     console.log(temp);
        
    // }

const  fibonacciFunction =  (num)=>{
const  Fibo = [0,1]
for (let i = 2; i < num; i++) {
    Fibo[i] = Fibo[i-1] + Fibo[i-2]
}
return Fibo
}
console.log(fibonacciFunction(8));




const fibonacciFunction1 = (num)=>{
    const Fibo = [0,1]
    for (let i = 2; i <=num; i++) {
    Fibo[i] = Fibo[i-1] + Fibo[i-2]
}
return Fibo[num]
}
console.log(fibonacciFunction1());







