// ............................................Fetch method--------------------------
// const displayData = document.getElementById("displayData")
// const comments = fetch('https://jsonplaceholder.typicode.com/comments')
// comments.then((response)=>{
//   return response.json()
// }).then((data)=>{

//     data.map((comment)=>{

//        const comments_data = `
//          <h1 id="name">${comment.name}</h1> 
//       <h2 id="email">${comment.email}</h2>
//       <p id="body">${comment.body}</p>
//         `

//         displayData.innerHTML += comments_data

//     })

// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("data fetch successfuly");    
// })



// ----------------------------------------------------------------------------- 


const displayData = document.getElementById("displayData")

const asyncComments =async()=>{
    try{
        const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        const commentsData = await comments.json();
        commentsData.map((comment)=>{
            const comments_Data =`
             <h1 id="name">${comment.name}</h1> 
        <h2 id="email">${comment.email}</h2>
        <p id="body">${comment.body}</p>div
    
            `;
            displayData.innerHTML+=comments_Data;
        })
        
    } catch(error){
        console.log(error);
        
    } finally{
        console.log('data fetch successfully');
        
    }
};
asyncComments();

// --------------------------------------------


// const displayData = document.getElementById("displayData");

// const asyncComments = async () => {
//     const comments = await fetch('https://jsonplaceholder.typicode.com/comments');
//     const commentsData = await comments.json();
    
//     commentsData.map((comment) => {
//         const comments_Data = `
//             <h1 id="name">${comment.name}</h1> 
//             <h2 id="email">${comment.email}</h2>
//             <p id="body">${comment.body}</p>
//         `;
//         displayData.innerHTML += comments_Data;
//     });

//     console.log('Data fetched successfully');
// };

// asyncComments();


// ----------------------put method------------------------------

// const updateDataWithPut = async () => {
//     const url = 'https://api.example.com/items/1'; // API endpoint
//     const updatedData = {
//       id: 1,
//       name: 'Updated Item',
//       description: 'This is the updated description for the item.'
//     };
//     try {
//       const response = await fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatedData) // Convert the data to JSON
//       });
//       const result = await response.json(); // Parse JSON response
//       console.log('PUT response:', result);
//     } catch (error) {
//       console.error('Error with PUT request:', error);
//     }
//   };
//   updateDataWithPut();