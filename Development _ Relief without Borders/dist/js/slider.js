
var slides=document.querySelector('#slider1-items').children;
var nextSlide=document.querySelector("#right1");
var prevSlide=document.querySelector("#left1");
var totalSlides=slides.length;
var index1=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index1++;
       if(index1==totalSlides){
        index1=0;
       }
   } 
   else{
           if(index==0){
            index1=totalSlides-1;
           }
           else{
            index1--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index1].classList.add("active");     

}


// SLIDER 2

var slides2=document.querySelector('#slider2-items').children;
var nextSlide2=document.querySelector("#right2");
var prevSlide2=document.querySelector("#left2");
var totalSlides2=slides2.length;
var index2=0;

nextSlide2.onclick=function () {
     next2("next2");
}
prevSlide2.onclick=function () {
     next2("prev2");
}

function next2(direction2){

   if(direction2=="next2"){
      index2++;
       if(index2==totalSlides2){
        index2=0;
       }
   } 
   else{
           if(index2==0){
            index2=totalSlides2-1;
           }
           else{
            index2--;
           }
    }

  for(i=0;i<slides2.length;i++){
          slides2[i].classList.remove("active");
  }
  slides2[index2].classList.add("active");     

}
// SLIDER 3

var slides3=document.querySelector('#slider3-items').children;
var nextSlide3=document.querySelector("#right3");
var prevSlide3=document.querySelector("#left3");
var totalSlides3=slides3.length;
var index3=0;

nextSlide3.onclick=function () {
     next3("next3");
}
prevSlide3.onclick=function () {
     next3("prev3");
}

function next3(direction3){

   if(direction3=="next3"){
      index3++;
       if(index3==totalSlides3){
        index3=0;
       }
   } 
   else{
           if(index3==0){
            index3=totalSlides3-1;
           }
           else{
            index3--;
           }
    }

  for(i=0;i<slides3.length;i++){
          slides3[i].classList.remove("active");
  }
  slides3[index3].classList.add("active");     

}
// SLIDER 4

var slides4=document.querySelector('#slider4-items').children;
var nextSlide4=document.querySelector("#right4");
var prevSlide4=document.querySelector("#left4");
var totalSlides4=slides4.length;
var index4=0;

nextSlide4.onclick=function () {
     next4("next4");
}
prevSlide4.onclick=function () {
     next4("prev4");
}

function next4(direction4){

   if(direction4=="next4"){
      index4++;
       if(index4==totalSlides4){
        index4=0;
       }
   } 
   else{
           if(index4==0){
            index4=totalSlides4-1;
           }
           else{
            index4--;
           }
    }

  for(i=0;i<slides4.length;i++){
          slides4[i].classList.remove("active");
  }
  slides4[index4].classList.add("active");     

}
// SLIDER 5

var slides5=document.querySelector('#slider5-items').children;
var nextSlide5=document.querySelector("#right5");
var prevSlide5=document.querySelector("#left5");
var totalSlides5=slides5.length;
var index5=0;

nextSlide5.onclick=function () {
     next5("next5");
}
prevSlide5.onclick=function () {
     next5("prev5");
}

function next5(direction5){

   if(direction5=="next5"){
      index5++;
       if(index5==totalSlides5){
        index5=0;
       }
   } 
   else{
           if(index5==0){
            index5=totalSlides5-1;
           }
           else{
            index5--;
           }
    }

  for(i=0;i<slides5.length;i++){
          slides5[i].classList.remove("active");
  }
  slides5[index5].classList.add("active");     

}






