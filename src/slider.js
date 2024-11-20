const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const dots = document.querySelectorAll(".dot");
const images = document.querySelectorAll(".images>img");

fillDot(0);

rightBtn.addEventListener("click", () => {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains("visible")) {
            if (i == images.length - 1) {
                images[i].classList.remove("visible");
                images[0].classList.add("visible");
                fillDot(0);
                break;
            } else {
                images[i].classList.remove("visible");
                images[i + 1].classList.add("visible");
                fillDot(i + 1);
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
                fillDot(images.length - 1);
                break;
            } else {
                images[i].classList.remove("visible");
                images[i - 1].classList.add("visible");
                fillDot(i - 1);
                break;
            }
        }
    }
});

function fillDot(index) {
    dots.forEach((dot) => {
        dot.style.color = "grey";
    });
    dots[index].style.color = "#c0c0c0";
}
