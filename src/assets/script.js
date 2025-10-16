// dark mode
const toggleBtn = document.getElementById("darkToggle");
const html = document.documentElement;
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}
toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// active menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#sideBar ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// sidebar toggle
if(document.querySelector("#openMenu")){
  document.querySelector("#openMenu").addEventListener("click", () => {
    const sideBar = document.getElementById("sideBar");
    if (sideBar.classList.contains("-left-70")) {
      sideBar.classList.remove("-left-70");
      sideBar.classList.add("left-0");
      document.querySelector("#closeNav").classList.remove("pointer-events-none", "opacity-0");
      document.querySelector("#closeNav").classList.add("pointer-events-auto", "backdrop-blur-xl", "transition-all", "bg-black/1");
    } else {
      sideBar.classList.add("-left-70");
      sideBar.classList.remove("left-0");
      document.body.classList.remove("bg-black/50");
      document.querySelector("#closeNav").classList.add("pointer-events-none", "opacity-0");
      document.querySelector("#closeNav").classList.remove("pointer-events-auto", "backdrop-blur-xl", "transition-all", "bg-black/1");
    }
  });
}
document.querySelector("#closeNav").addEventListener("click", () => {
  const sideBar = document.getElementById("sideBar");
  sideBar.classList.add("-left-70");
  sideBar.classList.remove("left-0");
  document.body.classList.remove("bg-black/50");
  document.querySelector("#closeNav").classList.add("pointer-events-none", "opacity-0");
  document.querySelector("#closeNav").classList.remove("pointer-events-auto", "backdrop-blur-xl", "transition-all", "bg-black/1");
});