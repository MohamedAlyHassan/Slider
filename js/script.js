
var lightBoxItem =document.getElementById("lightBoxItem");
var lightBoxContanier= document.getElementById("lightBoxContanier");
var imgs =Array.from(document.querySelectorAll(".item img"));
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var closeBtn = document.getElementById("close");
var curentIndex="";


for(var i=0; i<imgs.length;i++)
{
    imgs[i].addEventListener("click",function (eventInfo) 
    {
      var imgSrc= eventInfo.target.getAttribute("src");
      lightBoxContanier.style.display="flex"
      lightBoxItem.style.backgroundImage="url("+imgSrc+")" 
    })
}


function prevSlide() 
{
  curentIndex --;
  if (curentIndex < 0) 
  {
    curentIndex=imgs.length -1
  }
 var imgSrc = imgs[curentIndex].getAttribute("src");
 lightBoxItem.style.backgroundImage="url("+imgSrc+")"; 
}


function nextSlide() 
{
  curentIndex ++;
  if (curentIndex == imgs.length) 
  {
    curentIndex=0;
  }  
 var imgSrc = imgs[curentIndex].getAttribute("src");
 lightBoxItem.style.backgroundImage="url("+imgSrc+")";
}
function closeSlide() 
{
  lightBoxContanier.style.display="none"
}
  
closeBtn.addEventListener("click",closeSlide)

nextBtn.addEventListener("click",prevSlide)
prevBtn.addEventListener("click",nextSlide)


document.addEventListener("keydown",function (eventInfo) 
{
  if (eventInfo.code == "ArrowRight") 
  {
    nextSlide()
     
  }
  else if(eventInfo.code == "ArrowLeft")
  {
    prevSlide()
  }
  else if(eventInfo.code == "Escape")
  {
    closeSlide() 
  }
})

document.addEventListener("click",function (eventInfo) 
{
  if (eventInfo.target==lightBoxContanier) 
  {
    closeSlide()
    
  }
}) 

