<script>
    import Header from "../../../../UI/sportsheader.svelte";
    let questions = [
        {
        question: 'In Olympic weightlifting, which lift is performed first?',
        options: ['Clean and Jerk', 'Snatch', 'Deadlift'],
        correctAnswer: 'Snatch'
      },
      {
        question: 'Who was the first woman to win gold in weightlifting at the Olympics?',
        options: ['Lidia Valentin', 'Chen Yanqing', 'Tara Nott'],
        correctAnswer: 'Tara Nott'
      },
      {
        question: 'In which year was weightlifting added to the Olympics?',
        options: ['1896', '1912', '1920'],
        correctAnswer: '1896'
      },
      {
        question: 'What is the minimum age for participating in weightlifting at the Summer Olympics?',
        options: ['14', '16', '18'],
        correctAnswer: '16'
      },
      {
        question: 'Who was the first male weightlifter to win gold medals in three different Olympics?',
        options: ['Pyrros Dimas', 'Naim Süleymanoğlu', 'Halil Mutlu'],
        correctAnswer: 'Naim Süleymanoğlu'
      },
      {
        question: 'Who was the first Indian woman to win an Olympic medal in weightlifting?',
        options: ['Saikhom Mirabai Chanu', 'Karnam Malleshwari', 'K Sanjita Chanu'],
        correctAnswer: 'Karnam Malleshwari'
      },
      {
        question: 'Where is the headquarter of International Weightlifting Federation located?',
        options: ['Budapest', 'New York', 'Geneva'],
        correctAnswer: 'Budapest'
      },
      {
        question: 'In Tokyo Olympics, Mirabai Chanu won which color medal?',
        options: ['Gold', 'Bronze', 'Silver'],
        correctAnswer: 'Silver'
      },
      {
        question: 'Who won India’s first gold medal in weightlifting in Youth Olympics?',
        options: ['Achinta Sheuli', 'Jeremy Lalrinnunga', 'Sanket Patil'],
        correctAnswer: 'Jeremy Lalrinnunga'
      },
      {
        question: 'Which country has won the most number of medals in Weightlifting in Commonwealth Games?',
        options: ['Australia', 'India', 'England'],
        correctAnswer: 'Australia'
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
      background-image: url('C:\Users\Bhumika\Desktop\Frolic\src\lib\images\quiz3.jpg');
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
  
