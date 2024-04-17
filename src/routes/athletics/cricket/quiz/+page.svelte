<script>
    import Header from "../../../../UI/sportsheader.svelte";
    let questions = [
        {
        question: 'Which bowler holds the record for the most wickets taken in Test cricket history?',
        options: ['Shane Warne (Australia)', ' Glenn McGrath (Australia)', 'Muttiah Muralitharan (Sri Lanka)', 'James Anderson (England)'],
        correctAnswer: 'Muttiah Muralitharan (Sri Lanka)'
      },
      {
        question: 'What is the name of the prestigious trophy awarded to the winner of the Cricket World Cup?',
        options: ['The Ashes', ' The Oval Trophy', 'The Champions Trophy ', 'The ICC Cricket World Cup'],
        correctAnswer: 'The ICC Cricket World Cup'
      },
      {
        question: 'Which country is considered the birthplace of cricket?',
        options: [' India', 'Australia', 'England', 'South Africa'],
        correctAnswer: 'England'
      },
      {
        question: 'Ashes is a test series between which two countries?',
        options: ['England and Australia', 'New Zealand and West Indies', 'South Africa and England', 'None of the above'],
        correctAnswer: 'England and Australia'
      },
      {
        question: 'Who is the first player to score 100 centuries in International Cricket?',
        options: ['Sachin Tendulkar', 'Virat Kohli', 'Kapil Dev', 'None of the above'],
        correctAnswer: 'Sachin Tendulkar'
      },
      {
        question: 'Who is the first Indian Cricketer to take a hat-trick of wickets in a test match?',
        options: ['Harbhajan Singh', 'Virat Kohli', 'Kapil Dev', 'Sukhdev Singh'],
        correctAnswer: 'Harbhajan Singh'
      },
      {
        question: 'Among which Indian Cricketers who has captained the team in the most World Cup matches?',
        options: ['MS Dhoni', ' Virat Kohli', 'Rohit Sharma', 'None of the above'],
        correctAnswer: 'MS Dhoni'
      },
      {
        question: 'Which country’s team has secured the most World Cup victories?',
        options: ['India', 'Australia', 'Pakistan', 'None of the above'],
        correctAnswer: 'Australia'
      },
      {
        question: 'Which Indian player has taken the most wickets in World Cup history?',
        options: ['Mohammed Shami', 'Anil Kumble', 'Zaheer Khan', 'None of the above'],
        correctAnswer: 'Mohammed Shami'
      },
      {
        question: 'Who was the top wicket taker in 2011 World Cup?',
        options: ['Zaheer Khan', 'MS Dhoni', 'Mohammad Shami', 'Rohit Sharma'],
        correctAnswer: 'Zaheer Khan'
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
