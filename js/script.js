const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click", () =>{
    menuWeb();
});

function menuWeb(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}