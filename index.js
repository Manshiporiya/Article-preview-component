const btn = document.getElementById('btn');
const optionLogo = document.getElementById('optionLogo');
let div; 
let clicked = false;
optionLogo.style.display='none'
btn.addEventListener("click", function () {
  if(!clicked){
    optionLogo.style.display='block'
   optionLogo.style.display='flex'
  clicked=true;
  }
  else{
     optionLogo.style.display='none'
    clicked=false
  }
});

