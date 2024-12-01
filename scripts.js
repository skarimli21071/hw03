/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(60);
    }
}

function DrawHexagonalSpiral(context) {
       // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
       // https://studio.code.org/s/express-2024/lessons/29/levels/6
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;

    // The initial orientation is -90 degrees i.e. facing North
    angle = 90; // Start facing upwards
    context.moveTo(x, y);
    context.beginPath();

    // Loop to draw a 5-pointed star
    for (let counter = 15; counter < 300; counter +=2) {
        moveForward(counter, context); // Draw the outer edge
        context.stroke();
        turnRight(60); // Turn to create the star's points
    }

    context.stroke(); // Finalize the drawing
}

//Carousel Slider for Hour Of Code

let slideIndex = 1; // Initialize slideIndex
showSlides(slideIndex); // Display the first slide immediately

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Loop back to the first slide if `n` exceeds the number of slides
  if (n > slides.length) {slideIndex = 1}

  // Loop to the last slide if `n` is less than 1
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and set the corresponding dot to "active"
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}