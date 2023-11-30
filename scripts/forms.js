const forms = document.querySelectorAll("form");

forms.forEach((e) => {
  e.addEventListener("submit", closeQuestion);
});

function closeConsult() {
  const consaltFormDesktop = document.querySelector(".consalt-desktop");
  const consaltFormMobile = document.querySelector(".consalt-mobile");
  const sucsess = document.querySelector(".sucsess");
  const sendFormMobile = document.querySelector(".send-data-mobile");
  const sendFormDesktop = document.querySelector(".send-data");
  const callback = document.querySelector(".callback-desktop");
  const callbackWrapper = document.querySelector(".callback-wrapper");

  consaltFormDesktop.classList.add("invisible");
  consaltFormMobile.classList.add("invisible");
  sendFormMobile.classList.add("invisible");
  sendFormDesktop.classList.add("invisible");
  callback.classList.add("invisible");
  callbackWrapper.classList.add("invisible");
  sucsess.classList.remove("invisible");
}

function closeQuestion() {
  const backdrop = document.querySelector(".backdrop");
  const sucsess = document.querySelector(".sucsess");

  backdrop.classList.remove("invisible");
  sucsess.classList.remove("invisible");
}
