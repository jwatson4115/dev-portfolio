

window.onload = function() {
  document.getElementById("about-button").onclick = () => {
    scrollIntoView("about");
  }
  document.getElementById("lead-chevron").onclick = () => {
    scrollIntoView("about");
  }
  document.getElementById("experience-button").onclick = () => {
    scrollIntoView("experience");
  }
  document.getElementById("current-projects-button").onclick = () => {
    scrollIntoView("current-projects");
  }
  document.getElementById("current-projects-link").onclick = () => {
    scrollIntoView("current-projects");
  }
  document.getElementById("projects-button").onclick = () => {
    scrollIntoView("projects");
  }
  document.getElementById("skills-button").onclick = () => {
    scrollIntoView("skills");
  }
  document.getElementById("contact-button").onclick = () => {
    scrollIntoView("contact");
  }
  document.getElementById("to-top").onclick = () => {
    scrollIntoView("lead");
  }

  const scrollIntoView = function (id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    }); 
  }
}