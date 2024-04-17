<script>
    import { goto } from "$app/navigation";
    import Header from "../../UI/header.svelte";
    import Card from "../../UI/card.svelte";
    import CallOfDuty from "$lib/images/cod1.jpg"
    import CounterStrike from "$lib/images/cs1.jpg"
    import Bgmi from "$lib/images/bgmi1.jpg"

    function visitCallOfDuty(){
        goto('/Esports/CallOfDuty')
    }

    function visitCounterStrike(){
        goto('/Esports/CounterStrike')
    }

    function visitbgmi(){
        goto('/Esports/Bgmi')
    }

</script>
<style>
    .heading3{
    font-size: 70px;
    padding-top: 30px;
    padding-left: 270px;
    color:rgb(67, 51, 82);
    font-family: 'Anton', sans-serif;
    border-bottom: 0;
}
</style>
<Header />
<div style="border-bottom: 1px solid black;">
    <h1 class="heading3" style="background-color:rgb(242, 216, 139)" id="Athletics"><b>Which Esports you want to see?</b></h1><br>
<div  style="display: flex;background-color:rgb(242, 216, 139);position:relative;margin-top: 0;">
    <Card 
    filename= {CallOfDuty}
    sportsname="Call Of Duty"
    on:navigation={visitCallOfDuty}/>
    <Card 
    filename= {CounterStrike}
    sportsname="Counter Strike"
    on:navigation={visitCounterStrike}/>
    <Card 
    filename= {Bgmi}
    sportsname="BGMI"
    on:navigation={visitbgmi}/>
</div>
</div>