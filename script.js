const links = document.getElementsByClassName("pagination__link"); 
const linksArray = Array.from(links); 
linksArray.forEach(link => { link.addEventListener('click', function(e) { linksArray.forEach(link => { link.classList.remove("is_active"); }); 
this.classList.add("is_active"); }); });