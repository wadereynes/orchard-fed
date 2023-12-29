import "./scss/styles.scss";
import "./scss/modal.scss";

const images = document.querySelectorAll(".img-modal");

let imgSrc;
// get images src onclick
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgModal(e.target.getAttribute("data-modal-image"));
  });
});

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector("body").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //creating the close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");
  //close function
  closeBtn.onclick = () => {
    modal.remove();
  };

  modal.append(newImage, closeBtn);
};

var readMoreLinks = document.querySelectorAll('.read-more');
        
readMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      // Get the associated label element text
      var labelElementText = link.closest('.item').querySelector('.content-title').textContent;
      // Log the text to the console (you can replace this with your desired action)
      console.log('The element you clicked is: ' + labelElementText);
    });
});
