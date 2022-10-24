import { loadPage } from "./load"
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

const selections = document.querySelectorAll("[data-selection-target]");
const selectionContent = document.querySelectorAll("[data-selection-content]");
const list = document.querySelector(".drop");

list.addEventListener("click", () =>{
    document.querySelector(".links").classList.toggle("active");
    list.classList.toggle("toggle");
});

selections.forEach((selection) => {
    selection.addEventListener("click", () => {
        const target = document.querySelector(selection.dataset.selectionTarget);
        selectionContent.forEach((selectionContents) => {
            selectionContents.classList.remove("active");
        });
        selections.forEach((selection) => {
            selection.classList.remove("red");
        });
        selection.classList.add("red");
        target.classList.add("active");
    })
})

document.querySelector(".order").addEventListener("click", () => {
    document.querySelector(`[data-selection-target="#menu"]`).classList.add("red");
});

document.querySelector(`input[type="submit"]`).addEventListener("click", () => {
    document.querySelector("form").reset();
});

