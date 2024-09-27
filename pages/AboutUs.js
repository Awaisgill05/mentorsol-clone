const feedbackArray = [];
const textArea = document.getElementById("textArea");
const addFeedbackButton = document.getElementById("AddFeedback");
const feedbackContainer = document.getElementById("Feedback");

const add = () => {
if (textArea.value.trim()!=="") {
    const newFeedback = textArea.value.trim();
    feedbackArray.push(newFeedback); 
    textArea.value = "";
    updateList();
};
}

const updateList = () => {
    const feedbackDisplay = document.createElement("ul");
    feedbackDisplay.className = "feedback-list";
    feedbackArray.forEach((feedback) => {
        const feedbackData = document.createElement("li");
        feedbackData.className = "feedBack";
        feedbackData.innerHTML = `<h4 class="userfeedback">User feedback</h4>  ${feedback}`; 
        feedbackDisplay.appendChild(feedbackData); 
    });
    feedbackContainer.querySelector(".feedback-list")?.remove(); 
    feedbackContainer.appendChild(feedbackDisplay); 
};

addFeedbackButton.addEventListener("click", function (e) {
    e.preventDefault();
    add();
  });


  
  textArea.addEventListener("keypress",function (e){
    if (e.key==="Enter") {
        e.preventDefault();
        add();
    }
  })

  
  
// -----------------filter-developer------------------------ 

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#filterButtons button");
    const cards = document.querySelectorAll(".card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filterType = button.id === "AllBtn" ? "all" : button.id.replace("Btn", "").toLowerCase();
            
            cards.forEach(card => {
                if (filterType === "all" || card.dataset.type === filterType) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    });
});
