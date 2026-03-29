document.addEventListener("DOMContentLoaded", (event) =>{
    let button = document.querySelector(".layout__menuToggle");
    let bars = document.querySelector(".layout__menuToggle .fa-bars");
    let xmark = document.querySelector(".layout__menuToggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click", (event) =>{
        let visible = document.querySelector(".layout__aside--visible");
        if(!visible){
            aside.classList.add("layout__aside--visible");
            bars.style.opacity = 0;
            xmark.style.opacity = 1;
        }else{
            aside.classList.remove("layout__aside--visible");
            bars.style.opacity = 1;
            xmark.style.opacity = 0;
        }
    });

    window.addEventListener("resize", () =>{
        let size = parseInt(document.body.clientWidth);
        if(size <= 1060){
            aside.classList.remove("layout__aside--visible");
            bars.style.opacity = 1;
            xmark.style.opacity = 0;
        }
    });
});