<script>
    import Sportsheader from "../../../UI/sportsheader.svelte";
    import fencing from "$lib/images/fencing image1.jpg";
    import image1 from "$lib/images/image.webp";
    import image2 from "$lib/images/image3.jpg";

    let cards = [
      {
        url: image1,
        buttonText: 'Quiz',
        buttonUrl: '/athletics/fencing/quiz'
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
<div style="height: 750px; width: 100%;"><img src={fencing} style="height: 750px; width: 100%;" alt="kabaddi"></div>
    <div style="position: absolute;">
        <h1 class="heading">Fencing</h1>
        <h3 class="frontpagetext" style="width: 50%;"><p>Fencing is a combat sport that features sword fighting. 
            The three disciplines of modern fencing are the foil, the épée, and the sabre (also saber); each discipline 
            uses a different kind of blade, which shares the same name, and employs its own rules.</p></h3>
    </div>
</div>
{:else if rules==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Rules of Fencing</h2>
<ol class="Rules">
    <li><p>Fencers must salute one another and the referee at the beginning and end of the bout, with failure to do so can result in the loss of a point (the winner) or even suspension (the loser).</p></li>
    <li><p>Points are scored by hitting your opponent in accordance with the specific requirements for the type of weapon being used (as detailed above).</p></li>
    <li><p>In foil, strikes outside the target area stop the contest before resuming afresh, however strikes with the blade (whilst not counting) do not stop the action; the latter rule also applies to the epée.</p></li>
    <li><p>Barging the opponent, using your hand to cover the target zone or foot faults can lead to a points penalty at the referee’s discretion.</p></li>
    </ol>
</div>
{:else if Past==true}
<div style="background-color: rgb(220, 178, 130);">
    <h2 class="Rulesheading1" style="text-align: center;">Previous Events</h2>
    <div style="display: flex;padding-top: 50px;">
        <div class="card1">
            <h2 class="cardtext">2023 Summer Universiade,Chengdu,(CHN)<br>
                Start: 02-08-2023<br>
                End: 02-08-2023<br>
                Epee and Sabre<br><br><br>
                </h2>
                <h2 class="cardtext">World Championships,Milan,(ITA)<br>
                    Start: 22-07-2023<br>
                    End: 30-07-2023<br>
                    Sabre, Epee and Foil	<br><br><br>
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">Championnats d'Europe,Krakow,(POL)<br>
                Start: 28-06-2023<br>
                End: 30-06-2023<br>
                Sabre, Epee and Foil<br><br><br>
                </h2>
                <h2 class="cardtext">European Games,Krakow,(POL)<br>
                    Start: 25-06-2023<br>
                    End: 27-06-2023<br>
                    Sabre, Epee and Foil<br><br><br>
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">Championnats d'Afrique,Cairo,(EGY)<br>
                Start: 19-06-2023<br>
                End: 23-06-2023<br>
                Sabre, Epee and Foil<br><br><br>
                </h2>
                <h2 class="cardtext">Championnats Panaméricains,Lima,(PER)<br>
                    Start: 15-06-2023<br>
                    End: 20-06-2023<br>
                    Sabre, Epee and Foil<br><br><br>
                    </h2>
        </div>
    </div>
    <div style="display: flex;padding-top: 50px;">
        <div class="card1">
            <h2 class="cardtext">Championnats d'Europe,Plovdiv,(BUL)<br>
                Start: 02-08-2023<br>
                End: 02-08-2023<br>
                Epee, Foil and Sabre<br><br><br>
                </h2>
                <h2 class="cardtext">Coupe du Monde par équipes,Tbilisi,(GEO)<br>
                    Start: 04-06-2023<br>
                    End: 04-06-2023<br>
                    Foil	<br><br><br>
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">Coupe du Monde.Tbilisi,(GEO)<br>
                Start: 02-06-2023<br>
                End: 03-06-2023<br>
                Foil	<br><br><br>
                </h2>
                <h2 class="cardtext">Coupe du Monde par équipes,Istanbul,(TÜR)<br>
                    Start: 21-05-2023<br>
                    End: 21-05-2023<br>
                    Epee<br><br><br>
                    </h2>
        </div>
        <div class="card1">
            <h2 class="cardtext">2023 Summer Universiade,Chengdu,(CHN)<br>
                Start: 02-08-2023<br>
                End: 02-08-2023<br>
                Epee and Sabre<br><br><br>
                </h2>
                <h2 class="cardtext">Coupe du Monde par équipes,Fujairah,(UAE)<br>
                    Start: 21-05-2023<br>
                    End: 21-05-2023<br>
                    Epee<br><br><br>
                    </h2>
        </div>
    </div>
</div>
{:else if Future==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Future Events</h2>
<ul class="Rules" style="list-style: none;">
<li><p>1. Asian Games 2023<br>
    Multisport Event<br>
    23 September-8 October 2023<br><br>
    </p></li>
<li><p>2. Pro Kabaddi League (PKL)<br>
    Season 10<br>
    Starts:7 October 2023<br><br>
    </p></li>
<li><p>3. Men's Kabaddi World Cup 2023<br>
       7 October-23 October 2023<br><br>
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