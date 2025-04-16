const navbarElm = document.querySelector(".navbar");
const navBarOriginalOffset = navbarElm.offsetTop;
window.addEventListener("scroll", () => {
  if (window.scrollY >= navBarOriginalOffset) {
    navbarElm.style.position = "fixed";
    navbarElm.style.top = "0";
    navbarElm.style.left = "0";
    navbarElm.style.right = "0";
  } else {
    navbarElm.style.position = "static";
  }
});
