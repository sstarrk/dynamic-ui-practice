import "./style.css";

const headBtn = document.querySelector(".head");
const menu = document.querySelector(".menu");
headBtn.addEventListener("click", () => {
    if (showMenu(menu)) {
        headBtn.innerHTML = `
            Dropdown
                <img
                    class="svg"
                    src="https://www.svgrepo.com/show/500468/arrow-up-bold.svg"
                    alt="arrow down"
                />
        `;
    } else {
        headBtn.innerHTML = `
            Dropdown
                <img
                    class="svg"
                    src="https://www.svgrepo.com/show/500751/arrow-down-bold.svg"
                    alt="arrow down"
                />
        `;
    }
});

function showMenu(menu) {
    if (menu.classList.value == "menu visible") {
        menu.classList.value = "menu";
        return false;
    } else if (menu.classList.value == "menu") {
        menu.classList.value = "menu visible";
        return true;
    }
}
