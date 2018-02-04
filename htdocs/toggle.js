function toggle(id) {

    if (id.classList.contains("show")) {
        id.classList.remove("show");
        id.classList.add("hide");
    } else if (id.classList.contains("hide")) {
        id.classList.remove("hide");
        id.classList.add("show");
    }
}

function hideMenu(id) {

    if (id.classList.contains("show")) {
        id.classList.remove("show");
        id.classList.add("hide");
    }
}