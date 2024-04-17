<script>
    import Header from "../../../../UI/sportsheader.svelte";
    let questions = [
        {
        question: 'What is the name of the international governing body for badminton?',
        options: ['International Badminton Federation (IBF)', ' Badminton World Federation (BWF) ', 'World Badminton Association (WBA) ', 'Olympic Badminton Committee (OBC)'],
        correctAnswer: ' Badminton World Federation (BWF) '
      },
      {
        question: 'Which country has traditionally dominated the sport of badminton?',
        options: ['United States ', 'Denmark', 'Indonesia ', 'China '],
        correctAnswer: 'China '
      },
      {
        question: 'In which year did badminton become a full-medal Olympic sport?',
        options: ['1972', '1988', ' 1992', '1996'],
        correctAnswer: ' 1992'
      },
      {
        question: 'What is the name of the prestigious badminton tournament held in England?',
        options: [' French Open', ' All England Open Badminton Championships', 'Denmark Open', 'Indonesia Open'],
        correctAnswer: ' All England Open Badminton Championships'
      },
      {
        question: 'Which of the following is NOT associated with badminton?',
        options: ['Merdeka Cup', 'Thomas Cup', 'Uber Cup', 'Sudirman Cup'],
        correctAnswer: 'Merdeka Cup'
      },
      {
        question: 'Which Indian city is associated with the origin of badminton?',
        options: ['Poona', 'Shimla', 'Mussoorie', 'Ootacamund'],
        correctAnswer: 'Poona'
      },
      {
        question: 'Who was the first badminton player to be awarded the Arjuna Award when they were introduced in 1961?',
        options: ['Syed Modi', ' Dinesh Khanna', 'Nandu Natekar', 'Deepak Saxena'],
        correctAnswer: 'Nandu Nateka'
      },
      {
        question: 'Who of the following is the first Indian to win a gold at the BWF World Championships?',
        options: ['Pullela Gopichand', 'Kidambi Srikanth', 'Saina Nehwal', 'P V Sindhu'],
        correctAnswer: 'P V Sindhu'
      },
      {
        question: 'Where are the headquarters of Badminton World Federation (BWF) located?',
        options: ['Shanghai', 'Kuala Lumpur', 'Tokyo', 'Copenhagen'],
        correctAnswer: 'Tokyo'
      },
      {
        question: 'Who of the following is the first Indian to win an Olympic medal in badminton?',
        options: ['P. Gopichand', ' P.V. Sindhu', 'Saina Nehwal', 'Aparna Popat'],
        correctAnswer: 'Saina Nehwal'
      }
    ];
    let currentQuestion = -1; // Start at -1 to show the start quiz page
    let score = 0;
    let selectedOption = '';
    let totalQuestions = questions.length;
  
    function startQuiz() {
      currentQuestion = 0;
    }
  
    function checkAnswer() {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
      }
      nextQuestion();
    }
  
    function nextQuestion() {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        selectedOption = ''; // Reset selected option for the next question
      } else {
        currentQuestion = -2; // End of quiz
      }
    }
  
    function prevQuestion() {
      if (currentQuestion > 0) {
        currentQuestion--;
      }
    }
  
    function goToHomePage() {
      currentQuestion = -1;
      score = 0;
    }
  </script>
  <Header />
  <style>
    .quizbackground {
      background-image: url('C:\helloprisma\src\lib\images\games illustration.png');
      background-size: cover;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .quizcontainer {
      background-color: rgba(255, 255, 255, 0.8);
      padding: 60px;
      border-radius: 20px;
      max-width: 500px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .quizbutton-container {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
    .quizbutton-container button {
      padding: 10px 20px;
      border: none;
      background-color: black;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    .quizbutton-container button + button {
    padding: 10px 20px; /* Adjust the padding as needed */
    border: none;
    background-color: black;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 70px;
  }
  </style>
  
  {#if currentQuestion === -1}
    <div class="quizbackground">
      <div class="quizcontainer">
        <h1>Welcome to the Quiz</h1>
        <p>Click the button below to start the quiz.</p>
        <button on:click={startQuiz}>Start Quiz</button>
      </div>
    </div>
  {:else if currentQuestion === -2}
    <div class="quizbackground">
      <div class="quizcontainer">
        <h1>Your Quiz Score</h1>
        <p>Your score: {score}/{questions.length}</p>
        <p>Your score: {((score / totalQuestions) * 100).toFixed(2)}%</p>
        <button on:click={goToHomePage}>Go to Home</button>
      </div>
    </div>
  {:else}
    <div class="quizbackground">
      <div class="quizcontainer">
        <h2>{questions[currentQuestion].question}</h2>
        <ul>
          {#each questions[currentQuestion].options as option}
            <li>
              <label>
                <input type="radio" bind:group={selectedOption} value={option}/>
                {option}
              </label>
            </li>
          {/each}
        </ul>
        <div class="quizbutton-container">
          <button on:click={prevQuestion} disabled={currentQuestion === 0}>Previous</button>
          {#if currentQuestion < questions.length - 1}
            <button on:click={checkAnswer}>Next</button>
          {:else}
            <button on:click={checkAnswer}>Submit</button>
          {/if}
        </div>
      </div>
    </div>
  {/if}
