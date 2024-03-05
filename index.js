
let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let card3 = document.getElementById("trendThir");
let card4 = document.getElementById("trendFor");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");


console.log(card);
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    card3.style.display="block";
    card4.style.display="block";
   about.style.display="none";
   


    
document.getElementById("home").style.color="rgb(2, 173, 173)";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";


}
function shops(){
mainPage.style.display="none";
card.style.display="block";
card2.style.display="block";
card3.style.display="block";
card4.style.display="block";
about.style.display="none";

contact.style.display="none";


 
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="rgb(2, 173, 173)";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";


}

// function blogs(){
//     mainPage.style.display="none";
//     card.style.display="none";
//     card2.style.display="none";
//     card3.style.display="none";
//     card4.style.display="none";
//    about.style.display="none"
    

// document.getElementById("home").style.color="black";
// document.getElementById("shop").style.color="black";
// document.getElementById("contact").style.color="black";
// document.getElementById("about").style.color="black"

 



// }

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
    card4.style.display="none";
   about.style.display="block";
   contact.style.display="none";


document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="rgb(2, 173, 173)";

}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
    card4.style.display="none";
    
   about.style.display="none";
   contact.style.display="block";


document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
document.getElementById("contact").style.color="rgb(2, 173, 173)";

}

// cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
    card4.style.display="none";
    
    about.style.display="none";
   contact.style.display="none";
    document.querySelector(".cart").style.display="flex";
}


function addCart(){
    alert("Added To Cart");
    
}

function back(){
    location.reload();
}

/*buy now*/

function submit(){
    alert("Thank-You for successfully registered");
    location.reload();
}

function order(){
    alert("Thank-You for placing the order");
    location.reload();

}