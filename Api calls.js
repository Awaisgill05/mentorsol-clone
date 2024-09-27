
// ---------------promises------------------------- 
function createPromise(num1,num2) {
    return new Promise(function(fulfill, reject) {
        var total = num1/num2;
        if (total) {
            fulfill(`my division is ${total}`);
        } else {
            reject("Failed");
        }
    });
}

let onFulfilled = (result) => {
    console.log(result);
}

let onRejection = (error) => {
    console.log(error);
}

createPromise(5,2).then(onFulfilled).catch(onRejection);



// ------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


