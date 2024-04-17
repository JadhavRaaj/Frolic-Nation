<script>
    import Header from "../../../../UI/sportsheader.svelte";
    let questions = [
        {
        question: 'Which weapon in fencing is the heaviest?',
        options: ['Foil', 'Epee', 'Sabre'],
        correctAnswer: 'Epee'
      },
      {
        question: 'In which century did modern fencing originate?',
        options: ['15th century', '16th century', '17th century'],
        correctAnswer: '17th century'
      },
      {
        question: 'Which country is considered the birthplace of modern fencing?',
        options: ['Italy', 'France', 'Spain'],
        correctAnswer: 'Italy'
      },
      {
        question: 'Who is considered the father of modern fencing?',
        options: ['Camillo Agrippa', 'Domenico Angelo', 'Aldo Nadi'],
        correctAnswer: 'Domenico Angelo'
      },
      {
        question: 'What is the metal jacket worn in fencing called?',
        options: ['Plastron', 'Cuirass', 'Lamé'],
        correctAnswer: 'Lamé'
      },
      {
        question: 'In which Olympic Games was women’s fencing introduced as an event?',
        options: ['1896 Athens', '1904 St. Louis', '1924 Paris'],
        correctAnswer: '1924 Paris'
      },
      {
        question: 'How many points does a fencer need to win a direct elimination bout in a major competition?',
        options: ['10 points', '15 points', '21 points'],
        correctAnswer: '15 points'
      },
      {
        question: 'Who was the first Indian ever to represent India in fencing?',
        options: ['C.A.Bhavani Devi', 'Tanisha Khatri', 'Karan Singh'],
        correctAnswer: 'C.A.Bhavani Devi'
      },
      {
        question: 'Fencing in India started with what federation name in 1974 in India.',
        options: ['Fencing Committee of India', 'Fencing Federation of India', 'Fencing Association of India'],
        correctAnswer: 'Fencing Association of India'
      },
      {
        question: 'Which part of the blade is the weakest?',
        options: ['Forte', 'Foible', 'Pointe'],
        correctAnswer: 'Foible'
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
