<script>
    import Header from "../../../../UI/sportsheader.svelte";
    let questions = [
        {
        question: 'In which year, Kabaddi was introduced for the first time in the National Games of India?',
        options: ['1938', '1939', '1940', '1941'],
        correctAnswer: '1938'
      },
      {
        question: 'In which Olympics, Kabaddi was introduced for the first time for promotional purposes as a demonstration sport?',
        options: ['1933 Olympics', '1934 Olympics', '1935 Olympics', '1936 Olympics'],
        correctAnswer: '1936 Olympics'
      },
      {
        question: 'How many team members are there on each side of a Kabaddi match?',
        options: ['5', '6', '7', '11'],
        correctAnswer: '7'
      },
      {
        question: 'Which is the highest governing body of "Kabaddi"?',
        options: ['International Kabaddi Association', 'International Kabaddi Federation', 'International Kabaddi Council', 'International Kabaddi Commitee'],
        correctAnswer: 'International Kabaddi Federation'
      },
      {
        question: 'Which country won Kabaddi World Cup 2020 ?',
        options: ['Iran', 'Pakistan', 'India', 'None of above'],
        correctAnswer: 'Pakistan'
      },
      {
        question: 'Which country has won the most number of World Cups?',
        options: ['India', 'Pakistan', 'Iran', 'South Korea'],
        correctAnswer: 'India'
      },
      {
        question: 'Which is the most successful team in Pro Kabaddi League?',
        options: ['Jaipur Pink Panthers', 'Patna Pirates', 'U Mumba', 'Bengaluru Bulls'],
        correctAnswer: 'Patna Pirates'
      },
      {
        question: 'In South Asian Games, India has won gold how many times?',
        options: ['8', '10', '11', '9'],
        correctAnswer: '9'
      },
      {
        question: 'In which Asian Games edition, India failed to win gold in Kabaddi?',
        options: ['2022', '2014', '2018', '2010'],
        correctAnswer: '2018'
      },
      {
        question: 'Where was Kabaddi originated in India?',
        options: ['Maharashtra', 'Uttar Pradesh', 'Tamil Nadu', 'Karnataka'],
        correctAnswer: 'Tamil Nadu'
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
