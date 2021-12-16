// menu-toggle
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("open");
const closeBtn = document.getElementById("close");

menuToggle.addEventListener("click", function () {
  menu.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});

// open modal
const column = document.querySelectorAll(".column");
column.forEach((item, index) => {
  item.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    const slideImage = document.getElementById("slide-img");
    const caption = document.getElementById("caption");
    const textCaption = item.querySelector("img").alt;

    modal.style.display = "block";
    slideImage.src = `img/image-${index + 1}.jpg`;
    caption.innerHTML = textCaption;
  });
});

// close modal
const close = document.querySelector(".close");
close.addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
