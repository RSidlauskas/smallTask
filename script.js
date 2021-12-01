const aboutButton = document.querySelectorAll(".aboutButton")
const about = document.querySelectorAll(".about")


for (let i = 0; i < aboutButton.length; i++) {
    aboutButton[i].onclick = () =>{
        aboutButton.forEach(x => x.classList.remove("active"))
        about.forEach(x => x.style.display = "none")
        about.forEach(x => x.d)
        aboutButton[i].classList.add("active")
        about[i].style.display = "block"
    }
}