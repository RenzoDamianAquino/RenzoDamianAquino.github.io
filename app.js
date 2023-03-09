const containerHome = document.getElementById("container-home");
const body = document.getElementById("body");
const home = document.getElementById("home");
const aboutMe = document.getElementById("about-me");
const aboutMeText = document.getElementById("about-me-text");
const skills = document.getElementById("skills");
const contact = document.getElementById("contact");
const aboutMeContainer = document.getElementById("section-about-me");
const imgFoto = document.getElementById("img-about-me");

home.addEventListener('click', () => {
    home.classList.add("color-active");
    aboutMe.classList.remove("color-active");
    skills.classList.remove("color-active");
    contact.classList.remove("color-active");
});
aboutMe.addEventListener('click', () => {
    aboutMe.classList.add("color-active");
    home.classList.remove("color-active");
    skills.classList.remove("color-active");
    contact.classList.remove("color-active");
});

skills.addEventListener('click', () => {
    skills.classList.add("color-active");
    home.classList.remove("color-active");
    aboutMe.classList.remove("color-active");
    contact.classList.remove("color-active");
});

contact.addEventListener('click', () => {
    contact.classList.add("color-active");
    home.classList.remove("color-active");
    aboutMe.classList.remove("color-active");
    skills.classList.remove("color-active");
});



const girar = () => {
  imgFoto.style.filter= "grayscale(80%)";
  imgFoto.style.transition= "2s";
  imgFoto.style.width= "80%";
  imgFoto.style.textAlign= "center";
  aboutMeContainer.style.backgroundImage= "url(https://img.freepik.com/vector-premium/fondo-neon-triangulos_23-2149094034.jpg?w=360)"
  aboutMeContainer.style.backgroundRepeat= "no-repite";
  aboutMeContainer.style.backgroundSize= "cover";
}

aboutMe.addEventListener("click", () => {
  girar()
})