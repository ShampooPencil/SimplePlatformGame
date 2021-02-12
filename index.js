var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
 ];
 var prevImg = document.getElementById('prevImg')
 var nextImg = document.getElementById('nextImg')
 var prevOrNextImg = document.getElementById('slider')
 var prevSlider = 2;
 var nextSlider = 1;
 //event for previous Image button
 prevImg.addEventListener("click", function(){
       if(images[prevSlider] >= images[0]){
        prevOrNextImg.src = images[prevSlider];
         prevSlider -= 1
         console.log(prevSlider)
       }
       if(prevSlider === -1){
          prevSlider = 2
       }
 })
 //event for the next image button
 nextImg.addEventListener("click", function(){
     if(images[nextSlider] <= images[images.length - 1]){
        prevOrNextImg.src = images[nextSlider]
        nextSlider += 1
        console.log(nextSlider)
     }
     if(nextSlider === 3){
         nextSlider = 0
     }

 })
 //next time, figure out a way to compare the same number in both events...
 //example, i click on prevSlide and its at 2, compare a number if I want to 
 // click on next after prev btn. 
 //If I click on prev btn it works fine(its at images[2])
 //, but if I click on the next btn it skips the first arr and goes to images[1]
 //Ok good job today! good thinking and using my critical thinking powers!