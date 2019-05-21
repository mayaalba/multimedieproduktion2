function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Get the modal
var modal = document.getElementById("Modalkal");

// Åben modal knap
var btn = document.getElementById("myBtn");

// span element der lukker modal
var span = document.getElementsByClassName("close")[0];

// Når man klikker på knappen åbner modalen 
btn.onclick = function() {
  modal.style.display = "block";
}

// Når der trygges på span elementet (x), lukker modalen
span.onclick = function() {
  modal.style.display = "none";
}

// Når der trykkes hvor som helst på siden lukkes modalen 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
