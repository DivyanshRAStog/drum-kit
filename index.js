for(i=0;i<document.querySelectorAll("button").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}
function handleclick()
{
    var buttonInnerHTML=j
 this.style.color="black";
 switchCheck(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

 function switchCheck(buttonInnerHTML)
{
 switch(buttonInnerHTML)
   {
case "w":
var crash = new Audio("sounds/crash.mp3");
crash.play();
break;
case "a":
var kick = new Audio("sounds/kick-bass.mp3");
kick.play();
break;
case "s":
var snare= new Audio("sounds/snare.mp3");
snare.play();
break;
case "d":
var tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();
break;
case "j":
var tom2= new Audio("sounds/tom-2.mp3");
tom2.play();
break;
case "k":
var tom3 = new Audio("sounds/tom-3.mp3");
tom3.play(); 
break;
case "l":
var tom4 = new Audio("sounds/tom-3.mp3");
tom4.play();
break;
default:
console.log("key was not detected");
   }
}
document.addEventListener("keypress",function(event)
{
   console.log(event);
   switchCheck(event.key);
   //  alert("key was pressed");
   buttonAnimation(event.key);
      });

function buttonAnimation( currkey)
{
var activebutton=document.querySelector("."+currkey);  //"." so that we can select class
activebutton.classList.add("pressed");
setTimeout(function()
{
   activebutton.classList.remove("pressed");
} ,1000);

}
