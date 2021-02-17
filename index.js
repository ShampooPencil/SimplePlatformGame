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
var num = 0;
//event for previous Image button
prevImg.addEventListener("click", function () {
    num -= 1
    console.log(num)
    if (num < 0 || 2 === num) {
        num = 2
    }
    prevOrNextImg.src = images[num];
})
//event for the next image button
nextImg.addEventListener("click", function () {
    num += 1
    console.log(num)
    if (num > 2 || num === 0) {
        num = 0
    }
    prevOrNextImg.src = images[num]

})

function validate() {
    var n1 = document.getElementById('num1')
    var n2 = document.getElementById('num2')
    if (n1.value != "" && n2.value != "") {
        if (n1.value == n2.value) {
            return alert("Your in!");
        }
    }
    //The form will not get submitted if its onsubmit event returns false.
    alert("The values should be equal and not blank")
    return false
}

 //next time, figure out a way to compare the same number in both events...
 //example, i click on prevSlide and its at 2, compare a number if I want to 
 // click on next after prev btn. 
 //If I click on prev btn it works fine(its at images[2])
 //, but if I click on the next btn it skips the first arr and goes to images[1]
 //Ok good job today! good thinking and using my critical thinking powers!