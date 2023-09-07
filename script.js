let link = document.getElementsByClassName("pagination__link");
link.addEventListener('click', (e) => {
  link.classList.remove("is_active");
  this.classList.add("is_active");
});