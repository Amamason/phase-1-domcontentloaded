// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  }); 

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  ); 

  const changeText = document.getElementById('text');
changeText.innerHTML = "This is really cool";