<script>
    import Sportsheader from "../../../UI/sportsheader.svelte";
    import cricket from "$lib/images/cricket new.avif"
    import image1 from "$lib/images/image.webp";
    import image2 from "$lib/images/image3.jpg";

    let cards = [
      {
        url: image1,
        buttonText: 'Quiz',
        buttonUrl: '/athletics/cricket/quiz'
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
<div style="height: 750px; width: 100%;"><img src={cricket} style="height: 750px; width: 100%;" alt="cricket"></div>
    <div style="position: absolute;">
        <h1 class="heading">cricket</h1>
        <h3 class="frontpagetext" style="width: 50%;"><p>cricket ,A game that is played with a bat and ball on a large area of grass by two teams of eleven players</p></h3>
    </div>
</div>
{:else if rules==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Rules of cricket</h2>
<ol class="Rules">
    <li><p>Cricket is a team game played between two teams of 11 players each. The 11 players constitute batsmen, bowlers and a wicket keeper.</p></li>
    <li><p>The match is usually played on a large circular or oval shaped ground. There is also a smaller inner oval with a 22 yard pitch at the centre. At each end of the pitch is a set of three wickets with two wooden bails atop them.</p></li>
    <li><p>The match is broken down into separate sections called balls, which is one delivery of the ball bowled by a bowler to a batsman. Six of these balls form an over</p></li>
    <li><p>An innings is made of a specific number of overs or a certain amount of time. A one day international match consists of 50 overs per innings, a twenty twenty international match consists of 20 overs per innings whereas a test match is limited to a certain number of days which is 5 with 90 overs to be played on each day.</p></li>
    <li><p>During the innings, the batting team will have two batsmen on the pitch while the 11 players of the opposing team, who are the bowling team, will have their players at various parts of the field as fielders. One of them will be bowling the ball and another one will be a wicket-keeper and will be stationed behind the wicket.</p></li>
    <li><p>The match will also have two on-field umpires that make the decisions of the game. There is also a third umpire that monitors the game through a screen and helps with uncertain or close decisions.</p></li>
    
</ol>
</div>
{:else if Past==true}
<div style="background-color: rgb(220, 178, 130);">
<h2 class="Rulesheading1" style="text-align: center;">Previous Events</h2>
<div style="display: flex;padding-top: 50px;">
    <div class="card1">
        <h2 class="cardtext"> Event1:England Tour of India <br>
            Venue: India [Hyderabad, Vishakhapatnam, Rajkot, Ranchi, Dharamshala]<br>
            Date:Jan 25-Mar 09 <br>
            Result: India won 4-1<br><br>
            
        
        Event2:U-19 T20 World Cup 2024<br>
        Venue:South Africa<br>
        Date :Jan 19-Feb 11<br>
        Result:India lost by 79 runs to Australia in Finals<br><br>

           
        </div>
    <div class="card1">
        <h2 class="cardtext">  Event3:Indian premier league<br>
            Date: Mar 22,2024<br>
            Venue: MA Chidambaram Stadium<br>
            Result: RCB 173/6 <br>
                Chennai Super Kings 176/4<br>
                Chennai Super Kings won<br><br>


            
            
        Event4:Indian premier league<br>
        Date: Mar 24,2024<br>
        Venue: Narendra Modi Stadium<br>
        Result: Gujarat Titans 168/6 <br>
                Mumbai Indians 162/9 <br>
                Gujarat Titans won by 6 runs<br>



                     
            
    </div>
    <div class="card1">
        
            <h2 class="cardtext1"> Event5:Indian premier league<br>
                Date: Mar 27,2024<br>
                Venue: Rajiv Gandhi Int’l Stadium<br>
                Result: Sunrisers Hyderabad 277/3<br>
                Mumbai Indians 246/5 <br>
                Sunrisers Hyderabad won by 31 runs<br><br>

    
                
            Event6:Indian premier league<br>
            Date: Mar 29,2024<br>
            Venue: M Chinnaswamy Stadium<br>
            Result: RCB 182/6<br>
                Kolkata Knight Riders 186/3 <br>
                Kolkata Knight Riders won <br>


             </h2>
    </div>
</div>

</div>
{:else if Future==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Future Events</h2>
<ul class="Rules" style="list-style: none;">
    <li><p>ICC Men’s T20 World Cup 2024<br>
        Date: Jun 1- 29 Jun 2024<br>
        Venue: United States of America/West Indies<br><br>
        </p></li>
    <li><p>Women’s T20 Asia Cup 2024<br>
        Date: Jul 19- Jul 28 2024<br>
        Venue: Sri Lanka<br><br>
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