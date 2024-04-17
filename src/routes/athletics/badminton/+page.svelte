<script>
    import Sportsheader from "../../../UI/sportsheader.svelte";
    import badminton from "$lib/images/badminton.jpg";
    import image1 from "$lib/images/image.webp";
    import image2 from "$lib/images/image3.jpg";

    let cards = [
      {
        url: image1,
        buttonText: 'Quiz',
        buttonUrl: '/athletics/badminton/quiz'
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
<div style="height: 750px; width: 100%;"><img src={badminton} style="height: 750px; width: 100%;" alt="badminton"></div>
    <div style="position: absolute;">
        <h1 class="heading">Badminton</h1>
        <h3 class="frontpagetext" style="width: 50%;"><p>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the other team's half of the court.</p></h3>
    </div>
</div>
{:else if rules==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Rules of Badminton</h2>
<ol class="Rules">
<li><p>A player must wait until his opponent is ready before serving. If the opponent attempts a return then he is ruled having been ready.</p></li>
<li><p>The feet of both players must remain in a stationary position until the serve is made. Your feet can not be touching the line at this time.</p></li>
<li><p>It is not a fault if you miss the shuttle while serving.</p></li>
<li><p>The shuttle cannot be caught and slung with the racket.</p></li>
<li><p>A player cannot hold his racket near the net to ward off a downward stroke by his opponent or to interfere with his racket</p></li>
</ol>
<h2 class="Rulesheading1" style="text-align: center;">Faults</h2>
<ol class="Rules">
<li><p>The shuttle, at the instant of being hit is higher than the servers waist or the head of the racket is higher than the servers racket hand.</p></li>
<li><p>The shuttle does not land in the correct service court.</p></li>
<li><p>The server's feet are not in the service court or if the feet of the receiver are not in the court diagonally opposite the server.</p></li>
<li><p>The server steps forward as he/she serves.</p></li>
<li><p>Any player balking or feinting his opponent before serve or during serve.</p></li>
<li><p>A serve or shot that lands outside the court boundaries, passes under or through the net, touches any other obstructions or a players body or clothing. The boundary and service lines are considered in play.</p></li>
</ol>
<h2 class="Rulesheading1" style="text-align: center;">Scoring System</h2>
<ol class="Rules">
<li><p>A match consists of the best of 3 games of 21 points.</p></li>
<li><p>Every time there is a serve – there is a point scored.</p></li>
<li><p>The side winning a rally adds a point to its score.</p></li>
<li><p>At 20 all, the side which gains a 2 point lead first, wins that game.</p></li>
<li><p>At 29 all, the side scoring the 30th point, wins that game.</p></li>
<li><p>The side winning a game serves first in the next game.</p></li>
</ol>
</div>
{:else if Past==true}
<div style="background-color: rgb(220, 178, 130);">
<h2 class="Rulesheading1" style="text-align: center;">Previous Events</h2>
<div style="display: flex;flex-wrap: wrap;justify-content: space-between;padding-top: 50px;">
        <div class="card1">
            <h2 class="cardtext">Malaysia Open <br>
                9 January<br><br>
                Host: Kuala Lumpur, Malaysia<br><br>                  
                Venue: Axiata Arena<br>
                <br>Level: Super 1000<br>
                <br>Prize: $1,250,000<br>
                <br>Format: 32MS/32WS/32MD/32WD/32XD<br></h2>
        </div>
    <div class="card1">
        <h2 class="cardtext">Estonian International 2023 <br>
            9 January<br><br>
            Host: Tallinn, Estonia<br><br>                  
            Venue: Kalevi Spordihall<br>
            <br>Level: International Series<br>
            <br>Prize: $5,000<br>
            <br>Format: 32MS/32WS/32MD/32WD/32XD<br></h2>
    </div>
    <div class="card1">
        <h2 class="cardtext">India Open <br>
            16 January<br>
            Host: New Delhi, India<br><br>
            Venue: K. D. Jadhav Indoor Stadium<br>
            <br>Level: Super 750<br>
            <br>Prize: $900,000<br>
            <br>Format: 32MS/32WS/32MD/32WD/32XD<br>
            </h2>
    </div>
    <div class="card1">
        <h2 class="cardtext">Indonesia Masters <br>
            23 January<br>
            Host: Jakarta, Indonesia<br><br>
            Venue: Istora Gelora Bung Karno<br>
            <br>Level: Super 500<br>
            <br>Prize: $420,000<br>
            <br>Format: 32MS/32WS/32MD/32WD/32XD<br>
            </h2>
    </div>
    <div class="card1">
        <h2 class="cardtext">Iceland International 2023 <br>
           <br>
            Host: Reykjavík, Iceland<br><br>
            Venue: Tennis- og Badmintonfélag Reykjavíkur<br>
            <br>Level: Future Series<br>
            <br>Format: 32MS/32WS/32MD/32WD/32XD<br>
            </h2>
    </div>
    <div class="card1">
        <h2 class="cardtext">Thailand Masters <br>
            30 January<br>
            Host: Bangkok, Thailand<br><br>
            Level: Super 300<br>
            <br>Prize: $210,000<br>
            <br>Format: 32MS/32WS/32MD/32WD/32XD<br>
            </h2>
    </div>
    <h2 class="cardtext">& Many more.</h2>
</div>
</div>
{:else if Future==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Future Events</h2>
<ul class="Rules" style="list-style: none;">
<li><p>1. Tajikistan International
    7 August<br>
    Host: Dushanbe, Tajikistan<br>
    Venue: Dushanbe Tennis & Water Sport Complex<br>
    Level: International Series<br>
    Prize: $5,000<br>
    Format: 64MS/32WS/8MD/8WD/8XD<br>
    </p></li>
<li><p>2.Brazil International Series<br>
    Host: Foz do Iguaçu, Paraná, Brazil<br>
    Venue: TBC<br>
    Level: International Series<br>
    Prize: $5,000<br>
    Format: 32MS/32WS/32MD/16WD/32XD<br>
    </p></li>
<li><p>3. Maldives International
    14 August<br>
    Host: Malé, Maldives<br>
    Venue: Male’ Kulhivaru Ekuveni<br>
    Level: International Series<br>
    Prize: $5,000<br>
    Format: 64MS/64WS/32MD/32WD/16XD<br>
    </p></li>
<li><p>4. World Championships 
    21 August<br>
    Host: Copenhagen, Denmark<br>
    Venue: Royal Arena<br>
    Level: World Championships<br>
    Prize: N/A<br>
    Format: 64MS/48WS/48MD/48WD/48XD<br>
    </p></li>
<li><p>5. Cameroon International <br>
    Host: Yaoundé, Cameroon<br>
    Venue: Yaoundé Sports Complex<br>
    Level: International Series<br>
    Prize: $10,000<br>
    Format: 32MS/32WS/32MD/16WD/32XD<br>
    </p></li>
<li><p>6. Trinidad and Tobago International<br>
        Host: Tacarigua, Trinidad and Tobago<br>
        Venue: Racquet Center<br>
        Level: International Series<br>
        Prize: $5,000<br>
        Format: 32MS/32WS/32MD/16WD/32XD<br>
    </p></li>
<li><p>7. Lagos International Classics 
    28 August<br>
    Host: Surulere, Nigeria<br>
    Venue: Sir Molade Okoya Thomas Indoor Hall<br>
    Level: International Challenge<br>
    Prize: $15,000<br>
    Format: 64MS/32WS/32MD/32WD/32XD<br>
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