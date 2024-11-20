const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const dots = document.querySelectorAll(".dot");
const images = document.querySelectorAll(".images>img");

rightBtn.addEventListener("click", () => {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains("visible")) {
            if (i == images.length - 1) {
                images[i].classList.remove("visible");
                images[0].classList.add("visible");
                break;
            } else {
                images[i].classList.remove("visible");
                images[i + 1].classList.add("visible");
                break;
            }
        }
    }
});

leftBtn.addEventListener("click", () => {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains("visible")) {
            if (i == 0) {
                images[i].classList.remove("visible");
                images[images.length - 1].classList.add("visible");
                break;
            } else {
                images[i].classList.remove("visible");
                images[i - 1].classList.add("visible");
                break;
            }
        }
    }
});
