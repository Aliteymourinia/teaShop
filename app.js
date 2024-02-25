
const ham = document.querySelector("#humberger");
const nav = document.querySelector(".Navitems");
ham.addEventListener("click", function (e) {
  nav.classList.add("open");
});
const closeBtn = document.querySelector("#closetoggle");
closeBtn.addEventListener("click", function (e) {
  nav.classList.remove("open");
});
