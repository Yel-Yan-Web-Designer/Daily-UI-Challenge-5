/*----------NAVIGATION---------- */
document.querySelector(".hamburger").addEventListener("click", addBodyToDark);
document.querySelector(".cross").addEventListener("click", addBodyToDark)

function addBodyToDark () {
    document.body.classList.toggle("dark")
}

/*-----ADD ACTIVE CLASS TO ALL NAVLINKS----- */
document.querySelectorAll(".nav-link").forEach( x => {
    x.addEventListener("click", () => {
         // remove active class first
        document.querySelectorAll(".nav-link").forEach(x => x.classList.remove("active"));
        // add active for selected link
        x.classList.toggle("active");
    });
})

