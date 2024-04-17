<script>
    import Header from "../../../../UI/sportsheader.svelte";
      let questions = [
          {
          question: 'Which version of Counter-Strike introduced the iconic map "Dust II"?',
          options: ['Counter-Strike 1.5', 'Counter-Strike: Condition Zero','Counter-Strike: Source', 'Counter-Strike 1.6'],
          correctAnswer: 'Counter-Strike 1.6'
        },
        {
          question: 'What is the name of the elite counter-terrorism unit featured in Counter-Strike?',
          options: ['GIGN', 'SAS', 'GSG-9', 'SEAL Team 6'],
          correctAnswer: 'SAS'
        },
        {
          question: 'Which weapon is famously known as the "One Shot, One Kill" sniper rifle in Counter-Strike?',
          options: ['AWP', 'Scout (SSG 08)', 'SG 553', 'M4A4'],
          correctAnswer: 'AWP'
        },
        {
          question: 'In Counter-Strike, what does "CT" stand for?',
          options: ['Counter-Terrorist', 'Counter-Trap', 'Counter-Terror', 'Counter-Team'],
          correctAnswer: 'Counter-Terrorist'
        },
        {
          question: 'Which of these maps is set in a train station and features two bomb sites in Counter-Strike?',
          options: ['Dust II', 'Train', 'Inferno', 'Mirage'],
          correctAnswer: 'Train'
        },
        {
          question: 'What is the name of the Counter-Strike map set in an office building?',
          options: ['Office', 'Assault', 'Agency', 'Italy'],
          correctAnswer: 'Office'
        },
        {
          question: 'Which Counter-Strike game introduced the "Arms Race" game mode?',
          options: ['Counter-Strike: Global Offensive', 'Counter-Strike: Source', 'Counter-Strike 1.6', 'Counter-Strike: Condition Zero'],
          correctAnswer: 'Counter-Strike: Global Offensive'
        },
        {
            question: 'What is the name of the terrorist leader in Counter-Strike: Global Offensives Danger Zone mode?',
          options: ['The Phoenix', 'Dr. Zor', 'Dr. Julius No', 'Dr. Kleiner'],
          correctAnswer: 'The Phoenix'
        },
        {
          question: 'Which Counter-Strike map is set in a desert environment and features a middle area known as "Mid"?',
          options: ['Dust', 'Mirage', 'Cache', 'Inferno'],
          correctAnswer: 'Mirage'
        },
        {
          question: 'What is the name of the Counter-Strike game mode where one team attempts to plant a bomb while the other team tries to prevent it?',
          options: ['Hostage Rescue', 'Arms Race', 'Bomb Defusal', 'Demolition'],
          correctAnswer: 'Bomb Defusal'
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
    

