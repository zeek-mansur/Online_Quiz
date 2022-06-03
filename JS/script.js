
 let index = 0;
 let attempt = 0;
 let score = 0;
 let wrong = 0;
 
 
 quiz = [
    {
      question: "Who invented JavaScript?",
      answers: [
         "a: Douglas Crockford",
         "b: Sheryl Sandberg",
         "c: Brendan Eich",
         "d: Ben Mee"
    ],
      correctAnswer: "3"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: 
        [
        "a: Node.js",
        "b: TypeScript",
        "c: npm",
        "d: JScript"
        ],
      correctAnswer: "3"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: 
        [
        "a: Angular",
        "b: jQuery",
        "c: RequireJS",
        "d: ESLint"
        ],
      correctAnswer: "4"
    },

    {
        question: "Who invented JavaScript?",
        answers: [
           "a: Douglas Crockford",
           "b: Sheryl Sandberg",
           "c: Brendan Eich",
           "d: Ben Mee"
      ],
        correctAnswer: "3"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: 
          [
          "a: Node.js",
          "b: TypeScript",
          "c: npm",
          "d: JScript"
          ],
        correctAnswer: "3"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: 
          [
          "a: Angular",
          "b: jQuery",
          "c: RequireJS",
          "d: ESLint"
          ],
        correctAnswer: "4"
      },

      {
        question: "Who invented JavaScript?",
        answers: [
           "a: Douglas Crockford",
           "b: Sheryl Sandberg",
           "c: Brendan Eich",
           "d: Ben Mee"
      ],
        correctAnswer: "3"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: 
          [
          "a: Node.js",
          "b: TypeScript",
          "c: npm",
          "d: JScript"
          ],
        correctAnswer: "3"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: 
          [
          "a: Angular",
          "b: jQuery",
          "c: RequireJS",
          "d: ESLint"
          ],
        correctAnswer: "4"
      },
      
      
        {
            question: "Who invented JavaScript?",
            answers: [
               "a: Douglas Crockford",
               "b: Sheryl Sandberg",
               "c: Brendan Eich",
               "d: Ben Mee"
          ],
            correctAnswer: "3"
        }

  ];
// randomizing the quiz questions after refresh //
  let questions = quiz.sort(function(){

    return 0.5 - Math.random();
  });

  let totalQuestion = questions.length;

    $(function(){

        // timer code start from here //
    
        let totalTime = 200;
        let min= 0;
        let sec = 0;
        let counter = 0
    
        let timer = setInterval(function(){
            counter++;
            min= Math.floor((totalTime - counter)/60); //calculating min
            sec = totalTime - (min * 60) - counter
         
            if (counter === totalTime) {
    
                alert("Time is up. Press ok to show result");
                result(); //calls result function after time has ended//
                clearInterval(timer);
            }
           
            $(".timerBox span").text(min + ":" + sec);
    
        },1000);
        
        // timer has been set for 1 sec intervals
        // timer code ends  here //
        
    // print questions//
    
     printQuestion(index);
    
     })
 


    // Print Questions starts //

    const printQuestion = (i) => {

           // console.log(quiz);

        $('.questionBox').text(questions[i].question);
        $('.optionBox span').eq(0).text(questions[i].answers[0]);
        $('.optionBox span').eq(1).text(questions[i].answers[1]);
        $('.optionBox span').eq(2).text(questions[i].answers[2]);
        $('.optionBox span').eq(3).text(questions[i].answers[3]);


    }
    // Print Questions end //

    //function to check answer starts //

    const checkAnswer = (option) => {

        attempt++;

        let optionClicked = $(option).data("opt");

       // console.log(questions[index]);

        if(optionClicked == questions[index].correctAnswer){
            $(option).addClass("right");
            score++;
        }

        else{

            $(option).addClass("wrong");
            wrong++;
        }

        $(".scoreBox span").text(score);

        $(".optionBox span").attr("onclick", ""); 
    }

    //function to check answer end //

    //function for next question starts //

    const showNext = () => {

        if(index >= (questions.length - 1 )){

            showResult(0);
            return;
        }

        index++;
        // Removing class from previous answered question and re-adding the class back for next question //
        $(".optionBox span").removeClass();
        $(".optionBox span").attr("onclick", "checkAnswer(this)");


        printQuestion(index);

    }

    //function for next question ends //


    //function show result starts //

    

    const showResult = (j) => {

        if (

            j == 1 &&
            index < questions.length - 1 && 
            !confirm (
                "Quiz has not yet finished yet. Press ok to skip quiz and you get final result"
            )
        ) {

            return;
        }
            result(); // calls result function onclick//
    }

    //function show result ends //

    //result function starts//

    const result = () => {


        $("#questionScreen").hide();
        $("#resultScreen").show();
        $("#totalQuestion").text(totalQuestion);
        $("#attemptQuestion").text(attempt);
        $("#correctAnswers").text(score);
        $("#wrongAnswers").text(wrong);

    }
    //result function ends//

    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    const closeModalButtons = document.querySelectorAll("[data-close-button]");
    const overlay = document.getElementById("overlay");
    
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
    
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        })
       
    });
    
    overlay.addEventListener('click', () => {
    
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        })
    });
    
    
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
    
            const modal = button.closest(".modal")
            closeModal(modal);
        })
        
    });
    
    //open instruction function //
    function openModal (modal) {
    
        if (modal === null)
        return
        modal.classList.add('active');
        overlay.classList.add('active');
    
    }
    
    //close instruction function //
    function closeModal (modal) {
    
        if (modal === null)
        return
        modal.classList.remove('active');
        overlay.classList.remove('active');
    
    }
    