<script>
    import Sportsheader from "../../../UI/sportsheader.svelte";
    import weightlifting from "$lib/images/weightlifting.webp";
    import image1 from "$lib/images/image.webp";
    import image2 from "$lib/images/image3.jpg";

    let cards = [
      {
        url: image1,
        buttonText: 'Quiz',
        buttonUrl: '/athletics/weightlifting/quiz'
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
<div style="height: 750px; width: 100%;"><img src={weightlifting} style="height: 750px; width: 100%;" alt="weightlifting"></div>
    <div style="position: absolute;">
        <h1 class="heading">weightlifting</h1>
        <h3 class="frontpagetext" style="width: 50%;"><p>Weightlifting (often known as Olympic weightlifting) is a sport in which athletes compete in lifting a barbell loaded with weight plates from the ground to overhead, with the aim of successfully lifting the heaviest weights. Athletes compete in two specific ways of lifting the barbell overhead. The snatch is a wide-grip lift, in which the weighted barbell is lifted overhead in one motion. The clean and jerk is a combination lift, in which the weight is first taken from the ground to the front of the shoulders (the clean), and then from the shoulders to over the head (the jerk).</p></h3>
    </div>
</div>
{:else if rules==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Rules of weightlifting</h2>
<ol class="Rules">
<li><p>There are two stages in modern Olympic weightlifting – the snatch and the clean and jerk..</p></li>
<li><p>The snatch is where the weightlifter picks up the barbell and lifts it above his head in one singular motion.</p></li>
<li><p>In the clean and jerk, the weightlifter is first required to pick up the barbell and bring it up to his chest (clean). The lifter must then pause and extend his arms and legs to lift it above the head (jerk) with a straight elbow and have to hold it there until a buzzer is sounded.</p></li>
<li><p>A weightlifter is given three snatch attempts and three clean and jerk attempts each. A weightlifter’s best attempt at snatch and the clean and jerk are then added up and the one with the highest combined weight lifted is declared the winner.</p></li>
<li><p>In case two participants have lifted the same combined weight, then the one with the lower bodyweight is declared the winner. In the event of the bodyweight also being equal, the one with lesser attempts will be the winner.</p></li>
<li><p>A participant is allowed to increase the weight for his next attempt after a successful lift. The one who decides to lift the lowest weight in the first attempt is allowed to go first and he must attempt to lift within one minute of his name being called out in any tournament.</p></li>
<li><p>The barbell is made of steel and the heavy weights, covered with rubber, are added to the sides.</p></li>
<li><p>Weightlifters are allowed to use tapes to cover parts of their body – like the wrists and thumbs – to prevent injury. They also often rub chalk on their hands to make it dry before a lift, which prevents the barbell from slipping.</p></li>
</ol>
</div>
{:else if Past==true}
<div style="background-color: rgb(220, 178, 130);">
<h2 class="Rulesheading1" style="text-align: center;">Previous Events</h2>
<div style="display: flex;padding-top: 50px;">
    <div class="card1">
        <h2 class="cardtext"> Event1:7th Qatar International Cup <br>
            Location: Doha,Qatar<br>
            Date: 1 January-4 January 2023<br><br>
            
            
        Event2: IWF World Youth Championships 2023<br>
        Location: Durres,Albenia<br>
        Date :25 March-1 April 2023<br><br>


        Event3: Pan American Championships 2023<br>
        Location:Bariloche,Argentina<br>
        Date: 25 March-2 April 2023
           
        </div>
    <div class="card1">
        <h2 class="cardtext">  Event4:European Championships 2023 <br>
            Location:Yerevan,Armenia<br>
            Date:15 April-23 April 2023<br><br>
            
            
        Event5: Asian Championships 2023<br>
        Location:Jinju,Korea<br>
        Date :3 May-13 May 2023<br><br>


        Event6: Pan American Junior Championships 2023<br>
        Location:Manizales,Colombia<br>
        Date:10 May-15 May 2023                
            
    </div>
    <div class="card1">
        
            <h2 class="cardtext1"> Event7:Asian Youth and Junior Championships 2023 <br>
                Location:New Delhi,India<br>
                Date:28 July-5 August 2023<br><br>
                
                
            Event8:24th Central American and Caribbean Games <br>
            Location:San Salvador,El Salvador<br>
            Date:23 June-27 June 2023<br><br>
    
    
            Event9:IWF Grand Prix-I<br>
            Location:Havana,Cuba<br>
            Date:8 June-18 June 2023
                </h2>
    </div>
</div>

</div>
{:else if Future==true}
<div style="background-color:rgb(220, 178, 130); padding-bottom: 150px;">
<h2 class="Rulesheading1" style="text-align: center;">Future Events</h2>
<ul class="Rules" style="list-style: none;">
<li><p>1. IWF World Championships 2024<br>
    Location:Riyadh,Saudi Arabia<br>
    Date:4 September-17 September 2024<br><br>
    </p></li>
    <li><p>2.19th Asian Games 2024<br>
        Location:Hangzhou,China<br>
        Date:30 September-7 October 2024<br><br>
        </p></li>
        <li><p>3.Oceania Junior and Youth Championships 2024<br>
            Location:Apia,Samoa<br>
            Date:5 October-7 October 2024<br><br>
            </p></li>
            <li><p>4.African Youth and Junior Championships 2024<br>
                Location:Cairo,Egypt<br>
                Date:26 October-31 October 2024<br><br>
                </p></li>
                <li><p>5.IWF Grand Prix-II<br>
                    Location:Doha,Qatar<br>
                    Date:2 December-12 December 2024<br><br>
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
