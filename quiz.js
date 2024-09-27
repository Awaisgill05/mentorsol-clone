    const questionElement = document.getElementById("question")
    const answerButtons = document.getElementById("answer-buttons")
    const nextButton = document.getElementById("next-btn")
    const timerElement = document.getElementById("timer")
    
   


// -------------Quiz-QUestion-------------------------------- 
const questions  =[
    {
        question:"Which of the following command is used to create react-js-app ?",
        answers:[
        {text:"npx create-react-app appname",correct:true},
        {text:"npm install create-react-app",correct:false},
        {text:"npx install create-react-app -g",correct:false},
        {text:"install - l create-react-app",correct:false},
    ]
    },

    {
        question:"In React.js which one of the following is used to create a class for Inheritance ?",
        answers:[
            {text:"Create",correct:false},
            {text:"Extends",correct:true},
            {text:"Inherits",correct:false},
            {text:"Delete",correct:false},
    ]
    },

    {
        question:"Which of the following valid component return type of React ?",
        answers:[
                {text:"2",correct:false},
                {text:"5",correct:false},
                {text:"1",correct:true},
                {text:"3",correct:false},
            ]
            },

            {
                question:"Which of the following is a way to handle data in React.js ?",
                answers:[
                    {text:"State & Props",correct:true},
                    {text:"Services & Components",correct:false},
                    {text:"State & Services",correct:false},
                    {text:"State & component",correct:false},
                ]
                },

                {
                    question:"Which of the following is must for the API in React.js ?",
                    answers:[
                        {text:"setinitialComponent",correct:false},
                        {text:"renderComponent",correct:true},
                        {text:"render",correct:false},
                        {text:"All of above",correct:false},
                    ]
                    },  
];



let currentQuestionIndex = 0;
let score = 0;
let timeleft = 0;
let countdowninterval;
let attemps =3;
let answered = false;


const startQuiz = ()=>{
    currentQuestionIndex = 0;
    score=0;
    timeleft = 50;
    nextButton.innerHTML= "Next";
    startcountdown();
    showQuestion();   
}

// -------Timer------------------------------ 
const startcountdown = ()=>{

    countdowninterval = setInterval(()=>{
        timerElement.innerHTML=`Time Left:${timeleft}` 
        if (timeleft<=0) {
            clearInterval(countdowninterval);
            showscore();
        }
        timeleft--;
    },1000)
};
// ---------------displayQuestion--------------------- 
const showQuestion = ()=>{
    resetState();
    answered = false; 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + " . " +currentQuestion.question;

// ------------displayAnswer----------------------
    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add('btn', 'py-1', 'bg-white', 'w-[100%]', 'p-[10px]', 'my-[10px]', 'text-left', 'rounded-lg', 'hover:bg-[#222]', 'hover:text-white', 'px-4', 'border');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}; 


const resetState = ()=>{
    nextButton.style.display = "none";  
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


// ----------------------selectAnswer----------------------- 


const selectAnswer = (e)=>{
    const selectedbtn = e.target;
    Array.from(answerButtons.children).forEach(button=>{
        button.classList.remove("correct", "incorrect", "selected", "bg-[#9aeabc]", "bg-[#9aeabc]");
    });
    selectedbtn.classList.add("seleted")
    if (selectedbtn.dataset.correct==="true") {
        selectedbtn.classList.add("correct","bg-[#9aeabc]")
        if (!answered) {
            score++;
            answered=true;
        }
    } else {
        selectedbtn.classList.add("incorrect", "bg-[#9aeabc]")
    }
    nextButton.style.display = "block";
}

// -------------showScore----------------------------------- 

const showscore = ()=>{
    resetState();
   clearInterval(countdowninterval);

    if (score>=4) {
        questionElement.innerHTML = `your score is ${score}/${questions.length}.. Congratulation Passed!
        <div class="passed"> Now You are eligible for this Post</div>`;
        document.querySelector(".passed").style.color="#318B43";
         // nextButton.innerHTML="Try Again";
         nextButton.style.display="none"
    }
        else{
            attemps--;
        
        if (attemps>0) {
            questionElement.innerHTML = `faild! please Try Again your score is ${score}/${questions.length} and <div class="attemps"> You have ${attemps} attempts left.</div>`
            document.querySelector(".attemps").style.color="red";
       
            nextButton.innerHTML="Try Again";
            nextButton.style.display="block"
    
        } else {
            questionElement.innerHTML=`you are not eligible for this post`;
            nextButton.style.display="none"
        }
        
       
    }
};



const handleNextButton=()=>{
    if (nextButton.innerHTML==="Try Again") {
        clearInterval(countdowninterval)
        startQuiz();
    }
    else{
        currentQuestionIndex++
        if (currentQuestionIndex<questions.length) {
            showQuestion()
        } else {
            showscore()
        }
    }
   
}


nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz();
    }
})

startQuiz();



