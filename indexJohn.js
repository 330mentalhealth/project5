/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onload = function() {
  if (sessionStorage.clickcount) {
      count = sessionStorage.clickcount
    } 
  else {
      sessionStorage.clickcount = 0;
      count = sessionStorage.clickcount
  }
  document.getElementById("task-bar").value = count;
  if (count == 10){
    document.getElementById("task-counter").innerHTML = "You have scheduled " + count + " tasks. CONGRATULATIONS! You are a master!";
    document.getElementById("star1").src = "images/star.png";
    document.getElementById("star2").src = "images/star.png";
    document.getElementById("star3").src = "images/star.png";
  }
  else if (count >= 5){
    document.getElementById("task-counter").innerHTML = "You have scheduled " + count + " tasks. You're doing great! Keep it up!";
    document.getElementById("star1").src = "images/star.png";
    document.getElementById("star2").src = "images/star.png";
    document.getElementById("star3").src = "images/empty-star.jpg";
  }
  else if (count >= 3){
    document.getElementById("task-counter").innerHTML = "You have scheduled " + count + " tasks. You're getting there!";
    document.getElementById("star1").src = "images/star.png";
    document.getElementById("star2").src = "images/empty-star.jpg";
    document.getElementById("star3").src = "images/empty-star.jpg";
  }
  else if (count >= 1){
    if (count == 1){
      document.getElementById("task-counter").innerHTML = "You have scheduled " + count + " task. Keep on going and earn your first star!";
    }
    else{
      document.getElementById("task-counter").innerHTML = "You have scheduled " + count + " tasks. Keep on going and earn your first star!";
    }
    document.getElementById("star1").src = "images/empty-star.jpg";
    document.getElementById("star2").src = "images/empty-star.jpg";
    document.getElementById("star3").src = "images/empty-star.jpg";
  }
  else{
    document.getElementById("task-counter").innerHTML = "You have scheduled " + count + " tasks. Add tasks in the calendar to earn stars!";
    document.getElementById("star1").src = "images/empty-star.jpg";
    document.getElementById("star2").src = "images/empty-star.jpg";
    document.getElementById("star3").src = "images/empty-star.jpg";
  }
};
