function myFunction () {
			var x = document.getElementById("myTopnav");
			if (x.className === "nav") {
				x.className += " responsive";
			} 	
			else {
				x.className = "nav";
			}
		}
		
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function slideInHome() {
    document.getElementById('abouthome').scrollIntoView(
      {
        block: "start",
        behavior: 'smooth'
      }
    );
}

function slideInLightBox() {
    document.getElementById('light-box').scrollIntoView(
      {
        block: "start",
        behavior: 'smooth'
      }
    );
}

function slideInBox() {
    document.getElementById('box').scrollIntoView(
      {
        block: "start",
        behavior: 'smooth'
      }
    );
}

function slideInCharacter() {
    document.getElementById('light-box').scrollIntoView(
      {
        block: "start",
        behavior: 'smooth'
      }
    );
}


var coll = document.getElementsByClassName("poi");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


