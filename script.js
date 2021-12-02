const aboutButton = document.querySelectorAll(".aboutButton")
const about = document.querySelectorAll(".about")

const themeButton = document.querySelector(".themeButton")
let secondtheme = false;


for (let i = 0; i < aboutButton.length; i++) {
    aboutButton[i].onclick = () =>{
        aboutButton.forEach(x => x.classList.remove("active"))
        aboutButton[i].classList.add("active")
        about.forEach(x => x.style.display = "none")
        about[i].style.display = "block"
        if (i === 3){about[i].style.display = "flex"}
    }
}

themeButton.onclick = () => {
    secondtheme = !secondtheme
    if (secondtheme === true){
        document.documentElement.style.setProperty('--stroke', '#001858');
        document.documentElement.style.setProperty('--background', '#fef6e4');
        document.documentElement.style.setProperty('--paragraph', '#172c66');
        document.documentElement.style.setProperty('--button', '#f582ae');
        document.documentElement.style.setProperty('--secondary', '#8bd3dd');
        document.documentElement.style.setProperty('--tertiary', '#f582ae');
        document.documentElement.style.setProperty('--main', '#eec6b3');
        document.documentElement.style.setProperty('--paragraph2', '#2a2a2a');
    }
        else{

    }
}
