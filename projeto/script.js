function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains("light")) {
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("light")
    // }

    html.classList.toggle("light")
    // o toggle vai fazer o mesmo processo que a logica de "if" e "else" que foi feita antes dele

    const img = document.querySelector("#profile img")
    
    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/Avatar.png")
        // a função "setAttribute" serve para ajustar ou modificar um atributo
    } else {
        img.setAttribute("src", "./assets/avatar-dark.png")
    }


}