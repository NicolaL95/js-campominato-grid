const mode = prompt("inserisci la difficoltà a cui vuoi giocare: 1-facile(100 caselle) 2-media(81 caselle) 3-difficile(49 caselle)")
let selMode = 0;
const containerGrid = document.querySelector(".container");
if (mode == 1) {
    selMode = 100;
}

else if (mode == 2) {
    selMode = 81;
}

else if (mode == 3) {
    selMode = 49;
}

else {
    window.alert("non hai inserito una difficoltà valida!")
}

for (let index = 1; index <= selMode; index++) {
    const divGrid = document.createElement("div")
    divGrid.className = "cella"

    containerGrid.append(divGrid);
    divGrid.innerHTML = index;

}
window.onclick = e => {
    let selDiv = e.target
    for (let index = 1; index <= selMode; index++) {
        const divGrid = document.getElementsByClassName("cella")[index - 1]
        if (divGrid == selDiv) {
            if (divGrid.classList.contains("cyan")) {
                divGrid.classList.remove("cyan")
            }
            else {
                divGrid.classList.add("cyan")
            }
        }
    }
}