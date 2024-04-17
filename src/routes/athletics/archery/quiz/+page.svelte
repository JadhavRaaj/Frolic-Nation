<script>
    import Header from "../../../../UI/sportsheader.svelte";
    let questions = [
        {
        question: 'In Olympic archery, what is the distance from the shooting line to the target?',
        options: ['50 meters', '70 meters', '90 meters', '100 meters'],
        correctAnswer: '70 meters'
      },
      {
        question: 'What is the international governing body for archery?',
        options: ['FIFA', ' FINA', 'FITA', 'FIBA'],
        correctAnswer: 'FITA'
      },
      {
        question: 'In which modern Olympic Games did archery reappear as a competitive sport?',
        options: ['1908', '1948', '1972', '1988'],
        correctAnswer: '1972'
      },
      {
        question: 'Who is known as the god of archery in Greek mythology?',
        options: ['Apollo', 'Zeus', 'Athena', 'Hermes'],
        correctAnswer: 'Apollo'
      },
      {
        question: 'Which country is credited with the invention of the modern compound bow?',
        options: ['United States', 'England', 'China', 'Turkey'],
        correctAnswer: 'United States'
      },
      {
        question: 'Which of the following is a type of bow used in Archery at the Olympics?',
        options: ['Recurve', 'Compound', 'Barebow', 'All of them are used'],
        correctAnswer: 'Recurve'
      },
      {
        question: 'Modern arrows are made of..........',
        options: ['Fiberglass', 'Aluminum ', 'Carbon fiber', 'All of the above'],
        correctAnswer: 'All of the above'
      },
      {
        question: 'Which among the following represents India in archery?',
        options: ['Deepika Kumari', 'Manika Batra', 'Neeraj Chopra', 'Soumyajit Ghosh'],
        correctAnswer: 'Deepika Kumari'
      },
      {
        question: 'What is the minimum age to compete as an Olympic archer?',
        options: ['18 years', '20 years', '25 years', 'None of the above'],
        correctAnswer: 'None of the above'
      },
      {
        question: 'In which year at the Olympics the game of archery was not conducted?',
        options: ['1912', '1908', '1992', '1988'],
        correctAnswer: '1912'
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
  <body style="margin: 0;">
    
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
  </body>
  
