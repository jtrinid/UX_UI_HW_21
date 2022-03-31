function myFunction(x) {
    x.classList.toggle("change");
  }

const menuBtn = document.querySelector(".containerFilter");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        $(".accordionContainer").show();
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        $(".accordionContainer").hide();
    }
});
