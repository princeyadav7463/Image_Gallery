// Filtering Logic
const filterButtons = document.querySelectorAll(".filter-buttons button");
const images = document.querySelectorAll(".gallery .image");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    images.forEach((image) => {
      if (filter === "all" || image.classList.contains(filter)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});

// Modal Logic
const modal = document.querySelector(".modal");
const modalImg = document.getElementById("modal-img");
const close = document.querySelector(".close");

images.forEach((imgBox) => {
  imgBox.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = imgBox.querySelector("img").src;
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
