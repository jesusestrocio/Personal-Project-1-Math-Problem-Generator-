function openPopUpForm() {
    document.getElementById("pop-up-window-id").style.display = "block";
  }
  
function closePopUpForm() {
    document.getElementById("pop-up-window-id").style.display = "none";
  }

const dynamicPopUpFormTitle = document.querySelector('.title-for-pop-up-form')

const add = document.querySelector('.addition');
const subtract = document.querySelector('.subtraction');
const multiply = document.querySelector('.multiplication');
const divide = document.querySelector('.division');

[add, subtract, multiply, divide].forEach(function(element) {
        element.addEventListener("click", function() {
        if (element == add) {
            dynamicPopUpFormTitle.textContent = 'Addition';
        }
        if (element == subtract) {
            dynamicPopUpFormTitle.textContent = 'Subtration';
        }
        if (element == multiply) {
            dynamicPopUpFormTitle.textContent = 'Multiplication';
        }
        if (element == divide) {
            dynamicPopUpFormTitle.textContent = 'Division';
        }
        openPopUpForm()
    });
 });


document.querySelector(".generate-button").addEventListener('click', () => {

    const noOfDigitsInput = document.querySelector(".no-of-digits-input").value
    const noOfProblemsInput = document.querySelector(".no-of-problems-input").value
  
    console.log(noOfDigitsInput, noOfDigitsInput )
    console.log(typeof noOfdigits, typeof noOfProbelms )
  
    generateQuestions(+noOfDigitsInput, +noOfProblemsInput);
    
    closePopUpForm()

});


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  };
  
const dictionaryOfDigitsAvailable = {
    1: 1,
    2: 10,
    3: 100,
    4: 1000,
    5: 10000,
  };
  
const dictionaryOfProblemsGenerated = {};

function showTimerAndQuestionContainer() {
  document.getElementById("time-and-question-container-id").style.display = "block";
}

function generateQuestions(noOfDigitsInput, noOfProblemsInput){
    let min = dictionaryOfDigitsAvailable[noOfDigitsInput]
    let max = dictionaryOfDigitsAvailable[noOfDigitsInput + 1]

    for (let i = 0; i < noOfProblemsInput; i++) {
        const fistNumber = getRandomArbitrary(min, max);
        const secondNumber = getRandomArbitrary(min, max);
    
        const answer = fistNumber + secondNumber
        console.log(fistNumber , secondNumber, answer)
        dictionaryOfProblemsGenerated[i] = [fistNumber, secondNumber, answer];
    console.log(dictionaryOfProblemsGenerated,'a simple print of the dictofproblems ds after the loop has ended' )
    
    renderProblemList(dictionaryOfProblemsGenerated)

    showTimerAndQuestionContainer()
};
};



function renderProblemList(dictionaryOfProblemsGenerated) {
    console.log(dictionaryOfProblemsGenerated,'why do I need to pass the dictionary of questions')

    let dynamicTimerAndQuestionsContainer = '';
  
    for (let i = 0; i < Object.keys(dictionaryOfProblemsGenerated).length; i++) {
        let firstNumber = dictionaryOfProblemsGenerated[i][0]
        let secondNumber = dictionaryOfProblemsGenerated[i][1]
        const html = `
        <div class='individual-question-container'>
        <div class='firstNumber'>${firstNumber}</div> 
        <div class='symbol'> + </div>
        <div class='secondNumber'>${secondNumber}</div>
        <div class='userInputeSection'><input placeholder="Answer" class="userInputValue" required></div>
        <div class='userInputButtonSection'><button class="userInputValidationButton">Check</button></div>
        </div>
                    `;
      dynamicTimerAndQuestionsContainer += html;
    }
  
    document.querySelector('.questions-main-container').innerHTML = dynamicTimerAndQuestionsContainer;
  
}
  
  document.querySelectorAll('.check-answer')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      console.log(deleteButton, index)
      console.log(index , '.check-answers index')
      let iindex = index

// Don't need a for each here
  //     document.querySelectorAll('.answers')
  //     .forEach((inputBox, index) => {
  //         console.log(inputBox, inputBox.value ,'this is the input box, an array of them')
  //         console.log(dictOfProblems[iindex][2], +inputBox.value, 'printing the dict with index and users answer')
  //         console.log(iindex , '.answers index')
  //         if (dictOfProblems[iindex][2] === +inputBox.value){
  //             console.log('Turn the individual container green')
  //         }
  //         else {  
  //             console.log('Turn the individual container red')
  //         }

   
  // });
  const answerArray = document.querySelectorAll('.answers')

  console.log(dictOfProblems[iindex][2] , answerArray[iindex].value, 'both values are checked')

  if (answerArray[iindex].value == ''){
    console.log('Enter Value, No Value Entered - Alert')
    questionAnswerContainer[iindex].style.backgroundColor = '';

  }

  else if (dictOfProblems[iindex][2] === +answerArray[iindex].value){
    questionAnswerContainer[iindex].style.backgroundColor = 'green';
    console.log('Turn the individual container green')

  }

  else {  
    // checkUserInputButton[iindex].style.border = 'blue 2px';
    // checkUserInputButton[iindex].style.border = '2px blue';

    checkUserInputButton[iindex].style.backgroundColor = 'red';

    userInput[iindex].style.border = 'red';

    console.log(checkUserInputButton, userInput, 'Checks')



    questionAnswerContainer[iindex].style.backgroundColor = 'red';    
    console.log('Turn the individual container red')

   


  }

  
  
});

const questionAnswerContainer = document.querySelectorAll('.question-answer-container')


// <div class='userInput'><input placeholder="Answer" class="answers" required></div>
// <div class='checkUserInputButton'><button class="check-answer">Check</button></div>


const checkUserInputButton = document.querySelectorAll('.check-answer')
const userInput = document.querySelectorAll('.answers')


});
  
  
