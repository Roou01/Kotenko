const section = document
  .getElementById("analisys-section")
  .getBoundingClientRect().top;
console.log(section);

document.getElementById("analisys-link").addEventListener("click", () => {
  window.scrollTo(0, section);
});
