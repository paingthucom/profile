const homeLink = document.getElementById("home_link");
const galleryLink = document.getElementById("gallery_link");
const aboutLink = document.getElementById("about_link");
homeLink.addEventListener("click", () => {
  homeLink.classList.add("active");
  galleryLink.classList.remove("active");
  aboutLink.classList.remove("active");
});

galleryLink.addEventListener("click", () => {
  homeLink.classList.remove("active");
  galleryLink.classList.add("active");
  aboutLink.classList.remove("active");
});

aboutLink.addEventListener("click", () => {
  homeLink.classList.remove("active");
  galleryLink.classList.remove("active");
  aboutLink.classList.add("active");
});
