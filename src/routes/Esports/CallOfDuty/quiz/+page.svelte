<script>
    import Header from "../../../../UI/sportsheader.svelte";
      let questions = [
          {
          question: 'Which Call of Duty game introduced the popular "Zombies" mode?',
          options: ['Call of Duty: Modern Warfare', 'Call of Duty: Black Ops', 'Call of Duty: WWII', 'Call of Duty: Advanced Warfare'],
          correctAnswer: 'Call of Duty: Black Ops'
        },
        {
          question: 'In Call of Duty: Modern Warfare (2019), who is the leader of the fictional country of Urzikstan?',
          options: ['Farah Karim', 'Captain Price', 'Alex', 'Khaled Al-Asad'],
          correctAnswer: 'Farah Karim'
        },
        {
          question: 'Which of these is NOT a playable faction in Call of Duty: Warzone?',
          options: ['Coalition', 'Allegiance', ' NATO', 'OpFor'],
          correctAnswer: ' NATO'
        },
        {
          question: 'What is the name of the main antagonist in Call of Duty: Black Ops II?',
          options: [' Raul Menendez', 'Makarov', 'Viktor Reznov', 'General Shepherd'],
          correctAnswer: ' Raul Menendez'
        },
        {
          question: 'Which Call of Duty game introduced the "Gulag" feature in Warzone?',
          options: ['Call of Duty: Modern Warfare (2019)', 'Call of Duty: Black Ops Cold War', 'Call of Duty: Warzone', 'Call of Duty: Ghosts'],
          correctAnswer: 'Call of Duty: Warzone'
        },
        {
          question: 'In Call of Duty: Black Ops Cold War, which organization is the main antagonist?',
          options: ['Spetsnaz', 'Perseus', ' KGB', 'Task Force 141'],
          correctAnswer: 'Perseus'
        },
        {
          question: 'What is the name of the protagonist in Call of Duty 4: Modern Warfare?',
          options: [' Soap MacTavish', 'Alex Mason', 'John "Soap" MacTavish', 'David Mason'],
          correctAnswer: 'John "Soap" MacTavish'
        },
        {
          question: 'Which Call of Duty game introduced the concept of "Exo Suits"?',
          options: ['Call of Duty: Black Ops III', 'Call of Duty: Advanced Warfare', 'Call of Duty: Infinite Warfare', 'Call of Duty: Ghosts'],
          correctAnswer: 'Call of Duty: Advanced Warfare'
        },
        {
          question: 'In Call of Duty: Modern Warfare 2, who betrays Task Force 141?',
          options: ['General Shepherd', 'Makarov', 'Price', 'Ghost'],
          correctAnswer: 'General Shepherd'
        },
        {
          question: 'Which Call of Duty game features the Battle Royale mode "Blackout"?',
          options: ['Call of Duty: Black Ops 4', 'Call of Duty: Modern Warfare', 'Call of Duty: Warzone', 'Call of Duty: Black Ops Cold War'],
          correctAnswer: 'Call of Duty: Black Ops 4'
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
    
  