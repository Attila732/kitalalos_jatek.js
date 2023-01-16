var kitalalando=0;
var uzenet;
var tippBox;



window.onload=function(){
    uzenet=document.getElementById("uzenet");
    tippBox=document.getElementById("tipp");
    uzenet.innerHTML="üdvözöllek a játékban, kérlek írd be a tipped";
    // for (let index = 0; index < 20; index++) {
    //     kitalalando=Math.round(Math.random()*100);
    //     console.log("kitalalando: "+kitalalando);
        
    // }
    kitalalando=Math.round(Math.random()*100);
    console.log("kitalalando: "+kitalalando);
    document.getElementById("gomb").onclick=tippelt;
    
};


function tippelt(){
    //console.log("megnyomtak!");
    tipp=parseInt(tippBox.value);
    if(tippBox.value.length!=0)
    {
    var vissza="";
    if(tipp>kitalalando) 
        vissza="túl nagy a tipped";
    else if(tipp<kitalalando)
        vissza="a tipped túl kicsi";
    else 
        vissza="gratulálunk kitaláltad (új játék F5)";
        document.getElementById("gomb").onclick=null;
        document.getElementById("gomb").style.display="none";
    uzenet.innerHTML=vissza;
    }     
}; 