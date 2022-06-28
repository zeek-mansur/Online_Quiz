
 'use strict';

 let index = 0;
 let attempt = 0;
 let score = 0;
 let wrong = 0;
 
 //Array of objects //
 let quiz = [
  {
    question: "In which ocean 'Bermuda Triangle' region is located?",
    answers: [
       "A: Atlantic",
       "B: Indian",
       "C: Pacific",
       "D: Arctic"
  ],
    correctAnswer: "1"
  },
    
    {
      question: "Which country is known as the 'playground of Europe?",
      answers: [
         "A: Austria",
         "B: Holland",
         "C: Switzerland",
         "D: Italy"
    ],
      correctAnswer: "3"
    },
    {
      question: "Which continent has the highest number of countries ?",
      answers: 
        [
        "A: Asia",
        "B: Europe",
        "C: North America",
        "D: Africa"
        ],
      correctAnswer: "4"
    },
    {
      question: "Total number of oceans in the world is ",
      answers: 
        [
        "A: 3",
        "B: 5",
        "C: 7",
        "D: 12"
        ],
      correctAnswer: "2"
    },

    {
        question: "The world's longest straight road without any corners is located in ?",
        answers: [
           "A: USA",
           "B: Australia",
           "C: Suadi Arabia",
           "D: China"
      ],
        correctAnswer: "3"
      },
      {
        question: "In football, which team has won the Champions League (formerly the European Cup) the most?",
        answers: 
          [
          "A: AC Millan",
          "B: Liverpool",
          "C: Bayern Munich",
          "D: Real Madrid"
          ],
        correctAnswer: "4"
      },
      {
        question: "How many minutes are in a full week?",
        answers: 
          [
          "A: 10,080",
          "B: 12,100",
          "C: 9,880",
          "D: 11,240"
          ],
        correctAnswer: "1"
      },

      {
        question: "In which country, white elephant is found",
        answers: [
           "A: India",
           "B: Sri Lanka",
           "C: Thailand",
           "D: Malaysia"
      ],
        correctAnswer: "3"
      },
      {
        question: "Which one is the largest tropical rain forest in the world",
        answers: 
          [
          "A: Amazon",
          "B: Bosawas",
          "C: Southeast Asian Rain Forest",
          "D: Daintree Rain forest"
          ],
        correctAnswer: "1"
      },
      {
        question: "What is the largest country in the world?",
        answers: 
          [
          "A: USA",
          "B: Russia",
          "C: China",
          "D: India"
          ],
        correctAnswer: "2"
      },
      
      
        {
            question: "Which planet in the Milky Way is the hottest?",
            answers: [
               "A: Earth",
               "B: Mars",
               "C: Jupiter",
               "D: Venus"
          ],
            correctAnswer: "4"
        }

  ];

  /* function for question number count starts here
      tutotial link https://www.youtube.com/watch?v=QU6z69P5BrU  
    */
  const questionNumber = document.querySelector('.total-q');

  let currentQuestion;
  let availableQuestions = [];

// push the questions into available questions array//
  const setAvailableQuestions = () => {

    const totalQuestion = questions.length; 

     for (let i = 0; i < totalQuestion; i++){

      availableQuestions.push(questions[i])
     }

  };

  const getNewQuestion = () => {
    // set the question number// 
    questionNumber.innerHTML = "Q" + (index + 1) + " of " + (questions.length - 1);
    
    index++;
  };

  window.onload = () => {

    setAvailableQuestions();
    getNewQuestion();
  };

  // Function for question number count ends here //

// randomizing the quiz questions after refresh //
  let questions = quiz.sort( () => {

    return 0.5 - Math.random();
  });

  let totalQuestion = questions.length;

    $(function(){

        /* timer code start from here 
        tutorial link https://www.youtube.com/watch?v=Tf9hr4tmhK4 */
    
        let totalTime = 200;
        let min= 0;
        let sec = 0;
        let counter = 0;
        let pauseTimer = document.querySelector(".pause-timer");
        let resumeTimer = document.querySelector(".resume-timer");

// tutorial link for pause and resume timer https://www.youtube.com/watch?v=sRdCCVGuqHc //
        let isPaused = false; 
        let timer = setInterval(() => {
            if(!isPaused && totalTime >=0) {
              counter++;
            min= Math.floor((totalTime - counter)/60); //calculating min
            sec = totalTime - (min * 60) - counter; //calculating secs 
            }
            
         
            if (counter === totalTime) {
    
                alert("Time is up. Press ok to show result");
                result(); //calls result function after time has ended//
                clearInterval(timer);
            }
           
            $(".timer-box span").text(min + ":" + sec);
    
        },1000);
        
        // timer has been set for 1 sec intervals
        // timer code ends  here //

        //code to pause and resume countdown starts
        pauseTimer.addEventListener("click", (e) => {
         if (isPaused = true) {

          e.preventDefault();
         }
    
        })

        resumeTimer.addEventListener("click", (e) => {
          if (isPaused = false) {
 
           e.preventDefault();
          }         
         })
        //code to pause and resume countdown ends


    // print questions//
    
     printQuestion(index);
    
     });
 


    // Print Questions starts //

    const printQuestion = (i) => {

           // console.log(quiz);

        $('.question-box').text(questions[i].question);
        $('.option-box span').eq(0).text(questions[i].answers[0]);
        $('.option-box span').eq(1).text(questions[i].answers[1]);
        $('.option-box span').eq(2).text(questions[i].answers[2]);
        $('.option-box span').eq(3).text(questions[i].answers[3]);
    };
    // Print Questions end //

    //function to check answer starts //

    const checkAnswer = (option) => {

        attempt++;

        let optionClicked = $(option).data("opt");
        let button = document.querySelector("#question-screen > div.navigation > button.btn.disabled")

       // console.log(questions[index]);

        if(optionClicked == questions[index].correctAnswer){
            $(option).addClass("right");
            $(button).removeClass("disabled");
            score++;
        }

        else{

            $(option).addClass("wrong");
            $(button).removeClass("disabled");
            wrong++;
        }

        $(".score-box span").text(score);

        $(".option-box span").attr("onclick", ""); 
    };

    //function to check answer end //

    //function for next question starts //

    const showNext = () => {

        if(index >= (questions.length - 1)){

            showResult(0);
            return;
        }

        else{

          getNewQuestion();

        }

        
        // Removing class from previous answered question and re-adding the class back for next question //
        $(".option-box span").removeClass();
        $(".option-box span").attr("onclick", "checkAnswer(this)");
        $("button:nth-child(1)").addClass("disabled");


        printQuestion(index);

    };

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
    };

    //function show result ends //

    //result function starts//

    const result = () => {

        $("#question-screen").hide();
        $("#result-screen").show();
        $("#total-question").text(totalQuestion-1);
        $("#attempt-question").text(attempt);
        $("#correct-answers").text(score);
        $("#wrong-answers").text(wrong);

    };
    //result function ends//

    
    