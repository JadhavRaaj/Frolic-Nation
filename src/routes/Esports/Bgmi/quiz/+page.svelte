<script>
    import Header from "../../../../UI/sportsheader.svelte";
      let questions = [
          {
          question: 'What is the maximum number of players allowed in a squad in BGMI?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4'
        },
        {
          question: 'Which of the following is NOT a map available in BGMI?',
          options: ['Vikendi', 'Sanhok', 'Miramar', 'Rust'],
          correctAnswer: 'Rust'
        },
        {
          question: 'Which attachment increases the rate of fire of a weapon in BGMI?',
          options: ['Extended Quickdraw Mag', 'Compensator', 'Flash Hider', 'Lightweight Grip'],
          correctAnswer: 'Compensator'
        },
        {
          question: 'In BGMI, which throwable item deals damage over time to players caught in its explosion?',
          options: ['Frag Grenade', 'Molotov Cocktail', 'Stun Grenade', 'Smoke Grenade'],
          correctAnswer: 'Molotov Cocktail'
        },
        {
          question: 'What is the name of the currency used to purchase items from the in-game shop in BGMI?',
          options: ['UC(Unknown Cash)', 'BP(Battle Points)', 'Gold', 'Silver'],
          correctAnswer: 'UC(Unknown Cash)'
        },
        {
          question: 'Which vehicle in BGMI is capable of traversing both land and water?',
          options: ['Dacia', 'Buggy', 'Aquarail', 'Motorcycle'],
          correctAnswer: 'Aquarail'
        },
        {
          question: 'Which scope provides the highest magnification in BGMI?',
          options: [' Red Dot Sight', 'Holographic Sight', '8x Scope', '4x Scope'],
          correctAnswer: '8x Scope'
        },
        {
          question: 'What is the maximum level of backpack available in BGMI?',
          options: ['Level 2', 'Level 3', 'Level 4', 'Level 5'],
          correctAnswer: 'Level 3'
        },
        {
          question: 'Which category of weapon includes the UMP45 and Vector in BGMI?',
          options: [' Assault Rifles', 'Submachine Guns', 'Sniper Rifles', 'Shotguns'],
          correctAnswer: 'Submachine Guns'
        },
        {
          question: ' What is the primary game mode in BGMI where players fight to be the last one standing?',
          options: ['Team Deathmatch', 'Classic Mode', ' Arena Mode', 'Payload Mode'],
          correctAnswer: 'Classic Mode'
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
    
  