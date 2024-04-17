<script>
    // Import the hangmanArt array
    import Header from "../../UI/header.svelte";
    import { hangmanArt } from "../hangmanArt";
  
    let words = [
      { word: "Callofduty", hint: "This popular first-person shooter game series features intense multiplayer battles and realistic warfare scenarios." },
      { word: "counterstrike", hint: "A classic first-person shooter game where players engage in team-based combat, trying to eliminate each other or complete objectives." },
      { word: "bgmi", hint: "In this game, players parachute onto an island, scavenge for weapons and equipment, and battle to be the last one standing." },
      { word: "Fifa", hint: "An esport where players compete in a virtual soccer match, controlling teams of digital players on the field." },
      { word: "archery", hint: "In this sport, participants use bows to shoot arrows at a target." },
      { word: "cricket", hint: "A bat-and-ball game played between two teams of eleven players on a field." },
      { word: "kabaddi", hint: "This sport involves two teams competing to tag or tackle members of the opposing team while defending their own." },
      { word: "weightlifting", hint: "In this sport, participants compete to see who can lift the heaviest weights in various exercises." },
      { word: "esports", hint: "A competitive activity where players control characters in a virtual world and fight against each other." },
      { word: "surfing", hint: "A sport where participants ride waves on a board, aiming to perform tricks and maneuvers." },
      { word: "golf", hint: "This sport involves players hitting a small, hard ball with a stick into a series of holes on a course." },
      { word: "badminton", hint: "A sport where players compete to hit a shuttlecock over a net using a racket." },
      { word: "American football", hint: "In this team sport, players use their hands to pass and catch a ball while trying to score touchdowns." },
      { word: "overwatch", hint: "This esport involves teams battling each other in a virtual arena, using various characters with unique abilities." },
      { word: "rowing", hint: "This sport involves racing small, lightweight boats propelled by oars." },
      { word: "fieldhockey", hint: "In this team sport, players use sticks to hit a ball into the opposing team's goal." },
      { word: "fortnite", hint: "This esport involves building and defending structures while battling other players to be the last one standing." },
      { word: "rockclimbing", hint: " A sport where participants climb natural rock formations or artificial climbing walls." },
      { word: "tennis", hint: "In this sport, players use their hands to hit a small, perforated ball back and forth over a net." },
      { word: "curling", hint: "A sport where players slide stones on a sheet of ice towards a target area." },
      { word: "skiing", hint: " Participants in this sport race downhill on snow-covered slopes using skis." },
      { word: "worldofcraft", hint: "This esport involves players controlling characters in a fantasy world, completing quests and battling monsters." },
      { word: "cycling", hint: "A sport where participants ride bicycles and compete in races on various terrains." },
      { word: "hearthstone", hint: " This esport involves players strategizing and competing against each other in a virtual card game." },
      { word: "running", hint: " A sport where players compete to be the first to cross the finish line in a race on foot." },
      { word: "fieldhockey", hint: "In this team sport, players use sticks to hit a ball into the opposing team's goal." },

    ];
  
    let selectedWord, initial, match, userInput = "";
    let hangmanIndex = 0; // Index to track the current hangman stage
    let output = "";
    let gameInProgress = true;
    let currentHint = "";
    let score = 0;
  
    function initializeGame() {
      let randomNum = Math.floor(Math.random() * words.length);
      selectedWord = words[randomNum].word.toUpperCase();
      currentHint = words[randomNum].hint;
      initial = selectedWord;
      match = "";
      output = "";
      hangmanIndex = 0; // Reset to the first hangman stage
      userInput = "";
      // Create the initial output with dashes
      [...selectedWord].forEach(() => (output += "-"));
      gameInProgress = true;
    }
  
    function generateOutput() {
      output = "";
      for (let i = 0; i < initial.length; i++) {
        if (match.includes(initial[i])) {
          output += initial[i];
        } else {
          output += "-";
        }
      }
    }
  
    function evaluate() {
      if (!gameInProgress) return;
  
      let guess = userInput.toUpperCase().trim();
      if (!guess || match.includes(guess)) {
        userInput = "";
        return;
      }
  
      if (selectedWord.includes(guess)) {
        match += guess;
        generateOutput();
        if (output === initial) {
          handleWin();
        }
      } else {
        // Update the hangman stage for each wrong guess
        hangmanIndex++;
        if (hangmanIndex === hangmanArt.length) {
          handleLoss();
        }
      }
      userInput = "";
    }
  
    function handleWin() {
      gameInProgress = false;
      score += 10; // Increase score by 10 for each win
      const nextWordPrompt = confirm("You Win! Move to next word?");
      if (nextWordPrompt) {
        initializeGame();
      }
    }
  
    function handleLoss() {
      gameInProgress = false;
      alert(`You Lost! Your final score is ${score}. Try again.`);
      score = 0; // Reset score on loss
      initializeGame();
    }
  
    initializeGame();
  </script>
  <body>
      <Header />
  <main>

    <h1 class="title">Hangman</h1>
    
    <div class="hint">Hint: {currentHint}</div> <!-- Display the hint -->
  
    <div class="score">Score: {score}</div> <!-- Display the user's score -->
  
    {#if gameInProgress && hangmanIndex < hangmanArt.length}
      <pre class="hangman">{hangmanArt[hangmanIndex]}</pre>
    {/if}
  
    {#if !gameInProgress}
      <div class="message">You {hangmanIndex === hangmanArt.length ? 'Lost' : 'Win'}!</div>
      <button on:click={initializeGame}>Restart Game</button>
    {:else}
      <div class="output">
        {#each output.split('') as letter}
          <span class="box">{letter}</span>
        {/each}
      </div>
      <form on:submit|preventDefault={evaluate}>
        <input type="text" placeholder="Enter a letter" maxlength="1" bind:value={userInput} />
        <button type="submit">Submit</button>
      </form>
    {/if}
  </main>
  </body>
  
  <style>
    * {
      margin-top: 0%;
      color: green;
      text-align: center;
    }
  body{
    margin: 0;
  }
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
  
    .hint {
      font-size: 18px;
      margin-bottom: 10px;
    }
  
    .score {
      font-size: 20px;
      margin-bottom: 10px;
    }
  
    input,
    button {
      text-transform: uppercase;
      background-color: transparent;
      border: solid 1.2px green;
      height: 40px;
      font-size: 15px;
      margin: 10px;
      padding: 0 10px;
    }
  
    .box {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border: dotted 1.2px green;
      margin: 5px;
      font-size: 24px;
    }
  
    .hangman {
      font-size: 32px;
      margin-bottom: 20px;
    }
  
    form {
      margin-top: 20px;
    }
  
    .message {
      font-size: 20px;
      margin-bottom: 20px;
    }
  
    button {
      cursor: pointer;
      padding: 10px 20px;
      font-size: 16px;
      background-color: green;
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: darkgreen;
    }
  </style>
  