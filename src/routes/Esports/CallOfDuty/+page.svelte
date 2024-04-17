<script>
    import Sportsheader from "../../../UI/sportsheader.svelte";
    import callofduty from "$lib/images/cod2.jpg"
    import image1 from "$lib/images/image.webp";
    import image2 from "$lib/images/image3.jpg";

    let cards = [
      {
        url: image1,
        buttonText: 'Quiz',
        buttonUrl: '/Esports/CallOfDuty/quiz'
      },
      {
        url: image2,
        buttonText: 'Hangman',
        buttonUrl: '/hangman'
      }
    ];
    

    export let data;
    const { news } = data




    let Home=true;
    let rules=false;
    let Past=false;
    let Future=false;
    let news1=false;
    let games=false;

    function displayhome(){
        Home=true;
        rules=false;
        Past=false;
        Future=false;
        news1=false;
        games=false;
    }

    function displayrules(){
        Home=false;
        rules=true;
        Past=false;
        Future=false;
        news1=false;
        games=false;
    }

    function displaypast(){
        Home=false;
        rules=false;
        Past=true;
        Future=false;
        news1=false;
        games=false;
    }

    function displayfuture(){
        Home=false;
        rules=false;
        Past=false;
        Future=true;
        news1=false;
        games=false;
    }

    function displaynews(){
        Home=false;
        rules=false;
        Past=false;
        Future=false;
        news1=true;
        games=false;
    }

    function displaygames(){
        Home=false;
        rules=false;
        Past=false;
        Future=false;
        news1=false;
        games=true;
    }


    
</script>
<style>
    .heading{
  font-size: 130px;
  padding-top: 10px;
  padding-left: 40px;
  color:white;
  -webkit-text-stroke-color: rgb(67, 51, 82);
  -webkit-text-stroke-width: 2px;
  font-family: 'Anton', sans-serif;
  margin-top: 40px;
  margin-left: 100px;
}
.frontpagetext{
  margin-top: 170px;
  margin-left: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
 padding-left: 20px;
 font-size: 20px;
 font-family: 'Bricolage Grotesque', sans-serif;
 background-color: rgb(67, 51, 82);
 border-radius: 25px;
 color: rgb(250, 250, 250);
}
.Rulesheading1{
  font-size: 70px;
  padding-top: 30px;
  color:rgb(67, 51, 82);
  font-family: 'Anton', sans-serif;
}
.Rules{
  font-size: 25px;
  margin-top: 20px;
  margin-left: 250px;
  margin-right: 250px;
  padding-top: 30px;
  padding-bottom: 30px;
 padding-right: 10px;
 padding-left: 45px;
 font-size: 25px;
 font-family: 'Bricolage Grotesque', sans-serif;
 background-color: rgb(67, 51, 82);
 border-radius: 25px;
 color: rgb(250, 250, 250);
}
.card1{
    margin-top: 50px;
    margin-left: 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    width: 500px;
    height: 500px;
    background-color: rgb(67, 51, 82);
    border-radius: 20px;
}
.cardtext{
   padding-left: 25px;
   font-size: 25px;
   padding-top: 20px;
   font-family: 'Bricolage Grotesque', sans-serif;
   color: white;
}
.cardtext1{
    padding-left: 25px;
    padding-right: 15px;
    font-size: 20px;
    padding-top: 20px;
    font-family: 'Bricolage Grotesque', sans-serif;
    color: white;
 }
 .news-container {
    justify-content: center;
    margin-top:100px;
    display: flex;
    flex-direction: row;
    gap: 20px;  
  }
    .news {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        width: 325px;
        border: 1px solid #FFFFFF;
        background-color: #E6E6FA;
        border-radius: 10px;
        padding: 10px;
        margin: 20px;
        overflow:hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .news img {
        width: 100%; 
        height: auto;
        border-radius: 2px;
    }

    .news-body {
        font-size:15px;
        font-weight:50;
        margin-bottom:8px;
        padding:16px
    }

    .news-body h3 {
        font-size:22px;
        font-weight:50;
        margin-bottom: 8px;
        line-height:1.3;
    }
    .news-button {
    display : inline-block;
    padding:8px 16px;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    margin-top: 16px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .news-button:hover {
    background-color: black;
  }

  .news-link {
    text-decoration: none;
  }
  .features-container {
        margin-top: 50px;
      display: flex;
      justify-content: center;
    }
  
    .features-card {
        height: 300px;
        width: 400px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin: 50px;
      display: inline-block;
    }
    
    .features-card img {
      max-width: 100%;
      height: auto;
    }
    
    .features-card button {
      margin-top: 10px;
    }
</style>
<body style="margin: 0;">
<Sportsheader 
on:show-home={displayhome}
on:show-rules={displayrules}
on:show-past={displaypast}
on:show-future={displayfuture}
on:show-news={displaynews}
on:show-features={displaygames}/>
{#if Home==true}
<div style="display: flex;background-color:rgb(242, 216, 139);position:relative;border-bottom: 1px solid black;">
<div style="height: 750px; width: 100%;"><img src={callofduty} style="height: 750px; width: 100%;" alt="callofduty"></div>
    <div style="position: absolute;">
        <h1 class="heading">C-O-D</h1>
        <h3 class="frontpagetext" style="width: 50%;"><p>Call of Duty, also referred to as (COD), is a video game series and media franchise published by Activision, starting in 2003. </p></h3>
    </div>
</div>
{:else if rules==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">RULES OF CALL OF DUTY</h2>
<ol class="Rules">
<li><p></p>The usage of ‘jailbroken’ or ‘rooted’ devices in tournament matches is not permitted..</li>
<li><p>Only touch input is allowed to control the game in this tournament.</p></li>
<li><p>Players can play on android/ios tablets/phones only</p></li>
<li><p>Any use of unfair means such as aimbot, trigger bot, ESP will be disqualified.</p></li>
<li><p>It is strictly prohibited to gamble or bet during an ongoing tournament.</p></li>
<li><p>The exploitation of bugs that hinders fair play will result in disqualification.</p></li>
<li><p>For the tiebreaker of the points, total team/solo kills will be considered for breakingthe tie.</p></li>
<li><p>For the further tiebreaker, number of chicken dinners will be considered.</p></li>
<li><p>Organizers would not be held responsible for connectivity issues on the participant'sside.</p></li>
</ol>
</div>
{:else if Past==true}
<div style="background-color: rgb(220, 178, 130);">
<h2 class="Rulesheading1" style="text-align: center;">Previous Events</h2>
<div style="display: flex;padding-top: 20px;">
    <div class="card1">
        <h2 class="cardtext">CALL OF DUTY MOBILE WORLD CHAMPIONSHIP 2023<br>
            FORMAT:The Call of Duty Mobile World Championship 2023 will be staged in two phases - Swiss stage and Playoffs.
            The 16 participating teams will battle in a Swiss system format in the group stage.
            teams are paired randomly in Round 1, Rounds 2 to 5 are seeded based on each team's win-loss record.<br>
            RESULT: Wolves players are the winners of Call of Duty: Mobile (CoD Mobile) World Championship 2023 after their victory against GodLike.<br>
            </h2>
            <h2 class="cardtext1">
                </h2>
    </div>
    <div class="card1">
        <h2 class="cardtext">CALL OF DUTY MOBILE WORLD CHAMPIONSHIP 2022<br>
            FORMAT: 4 groups of four teams in a double-elimination format.
            Top 2 teams advance to Playoffs.
            Playoffs: 8 teams in a double-elimination bracket<br>
            RESULT:Tribe gaming are the winners of Call of Duty: Mobile (CoD Mobile) World Championship 2022 <br>                  
        
            </h2>
            <h2 class="cardtext1">
                </h2>
    </div>
    
    
</div>

</div>
{:else if Future==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Future Events</h2>
<ul class="Rules" style="list-style: none;">
<li><p>CALL OF DUTY MOBILE WORLD CHAMPIONSHIP 2024<br>
       Date:Not declared yet<br>
    </p></li>
      
</ul>
</div>
{:else if news1==true}
{#each news as news}

<div class="news-container">
    <div class="news">
    
        <img src="{news.urlToImage}" alt="urlToImage" />
        <div class="news-body">
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <a class="news-link" href="{news.url}" target="_blank">
                <button class="news-button">Read more</button>
              </a>
        </div>
    </div>
</div>
{/each}
{:else if games==true}
  <h1 class="Rulesheading1" style="margin-left: 37%;">Choose to play!</h1>
<div class="features-container">
    {#each cards as card}
      <div class="features-card">
        <img src={card.url} alt="Card" /><br>
        <div style="margin-left: 40%;"><button on:click={() => window.location.href = card.buttonUrl}>{card.buttonText}</button></div>
      </div>
    {/each}
  </div>
{/if}
</body>