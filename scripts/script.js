// -----------VARIABLES---------

//buttons
const consultOpenBtn = document.querySelectorAll(".consultaion-form");
const closeBtn = document.querySelectorAll(".close-btn");
const consaltCloseBtn = document.querySelectorAll(".consalt-close-btn");
const sendCloseBtn = document.querySelectorAll(".send-data-close-btn");
const callbackCloseBtn = document.querySelectorAll(".callback-close-btn");
const tableCloseBtn = document.querySelector(".table-btn");
const sucsessCloseBtn = document.querySelector(".sucsess-close-btn");
const footerConfidentialCloseBtn = document.querySelectorAll(
  ".footer__confidential-close-btn"
);
const tableBtn = document.querySelector(".analisys-btn");
// const orderSectionBtn = document.querySelector(".send-data-btn");
const footerCallbackBtn = document.querySelector(
  ".main-footer-desktop_container-phone-button"
);
const footerCallbackMobileBtn = document.querySelector(
  ".main-footer-mobile_container-phone-button"
);
const footerCallbackCloseBtn = document.querySelector(".callback-close-btn");

const upBtn = document.querySelector(".up-button");
const menuBtn = document.querySelector(".menu-icon");
const mobileAnalisysBtn = document.getElementById("mobile-analisys-btn");
const mobileFooterBtn = document.getElementById("footer-mobile-btn");
const disclaimer = document.querySelectorAll(".disclaimer");
const sendDeskBtn = document.querySelector(".send-desktop");
const sendMobBtn = document.querySelector(".send-mobile");

//divs

const menuHolder = document.querySelector(".main-header_container");
const getSection = document.getElementById("get-section");
const backdrop = document.querySelector(".backdrop");
const consaltFormDesktop = document.querySelector(".consalt-desktop");
const consaltFormMobile = document.querySelector(".consalt-mobile");
const table = document.querySelector(".table");
const sendFormMobile = document.querySelector(".send-data-mobile");
const sendFormDesktop = document.querySelector(".send-data");
const callback = document.querySelector(".callback-desktop");
const callbackWrapper = document.querySelector(".callback-wrapper");
const sucsessPopup = document.querySelector(".sucsess");
const animationAnalisys = document.querySelectorAll(".analisys-circle");
const footerConfidential = document.querySelectorAll(".footer__confidential");
const sucsess = document.querySelector(".sucsess");
const showAgreement = document.querySelectorAll(".show_agreement");
const disclaimerInForms = document.querySelectorAll(".disclamer_container");

//menu
const linkForWho = document.getElementById("for-who");
const linkYouGet = document.getElementById("you-get");
const linkAnalisys = document.getElementById("analisys-link");
const linkOrder = document.getElementById("order-link");
const linkAbout = document.getElementById("about-link");
const linkTestimonial = document.getElementById("testimonial-link");

const menuRemover = function () {
  menuHolder.classList.remove("mover");
  menuBtn.classList.remove("xcross");
  document.body.classList.remove("no-scroll");
};

linkForWho.addEventListener("click", () => {
  const mainSection = document
    .getElementById("main-header")
    .getBoundingClientRect().top;
  document.getElementById("for-who").addEventListener("click", () => {
    window.scrollTo(0, mainSection);
    console.log("clicked");
  });
  menuRemover();
});
linkYouGet.addEventListener("click", () => {
  const getSection = document
    .getElementById("get-section")
    .getBoundingClientRect().top;
  document.getElementById("you-get").addEventListener("click", () => {
    window.scrollTo(0, getSection);
    console.log("clicked");
  });
  menuRemover();
});
// linkAnalisys.addEventListener("click", menuRemover);
// linkOrder.addEventListener("click", menuRemover);
// linkAbout.addEventListener("click", menuRemover);
// linkTestimonial.addEventListener("click", menuRemover);

// -----------FUNCTIONALITY---------

//--- show phone
const showPhone = () => {
  document.querySelector(".nav-phone-btn").addEventListener("click", () => {
    document.querySelector(".nav-social-par").classList.toggle("show");
  });
};

showPhone();

//--- show languages
const showLanguages = () => {
  document.querySelectorAll(".langArrow").forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("rotate");
      document.querySelectorAll(".lang-link").forEach((e) => {
        e.classList.toggle("move-link");
      });
    });
  });
};

showLanguages();

//--- show agreement
document.querySelectorAll(".question_agreement").forEach((e) => {
  e.addEventListener("click", () => {
    footerConfidential.forEach((item) => {
      item.classList.remove("invisible");
    });
    backdrop.classList.remove("invisible");
    document.body.classList.add("no-scroll");
    upBtn.classList.add("invisible");
  });
});

document.querySelectorAll(".consalt_agreement").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".consalt-disclamer").forEach((e) => {
      e.classList.remove("invisible");
    });
  });
});

// --- show menu agreement
const menuAgreement = () => {
  document.querySelectorAll(".mobile-copyright").forEach((e) => {
    e.addEventListener("click", () => {
      backdrop.classList.remove("invisible");
      document.body.classList.add("no-scroll");
      upBtn.classList.add("invisible");
      footerConfidential.forEach((item) => {
        item.classList.remove("invisible");
      });
    });
  });
};

menuAgreement();

// --- close agreement
document.querySelectorAll(".disclaimer_close_button").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".consalt-disclamer").forEach((e) => {
      e.classList.add("invisible");
      document.body.classList.add("no-scroll");
    });
  });
});

// --- copyright year update

const copyright = () => {
  const curYear = new Date().getFullYear();
  document.querySelectorAll(".copyright").forEach((e) => {
    e.innerText = `© Oleksii Kotenko 2011 - ${curYear}`;
  });
};

copyright();

const servise = () => {
  const curYear = new Date().getFullYear();
  document.querySelectorAll(".change-year").forEach((e) => {
    e.innerHTML = `${curYear - 2009} `;
  });
};

servise();

document.addEventListener("scroll", () => {
  const count = 0;

  if (count > getSection.getBoundingClientRect().top) {
    upBtn.classList.remove("invisible");
  } else {
    upBtn.classList.add("invisible");
  }

  // animationAnalisys.forEach((item) => {
  //   if (item.getBoundingClientRect().top <= 600) {
  //     item.classList.add("animation-analisys");
  //   }
  // });
});

backdrop.onclick = function () {
  backdrop.classList.add("invisible");
  consaltFormDesktop.classList.add("invisible");
  consaltFormMobile.classList.add("invisible");
  table.classList.add("invisible");
  sendFormMobile.classList.add("invisible");
  sendFormDesktop.classList.add("invisible");
  callbackWrapper.classList.add("invisible");
  callback.classList.add("invisible");
  sucsess.classList.add("invisible");
  footerConfidential.forEach((item) => {
    item.classList.add("invisible");
  });
  document.querySelectorAll(".consalt-disclamer").forEach((e) => {
    e.classList.add("invisible");
  });
  if (
    document.querySelector(".main-header_container").classList.contains("mover")
  ) {
    return;
  } else {
    document.body.classList.remove("no-scroll");
  }
};

menuBtn.addEventListener("click", () => {
  if (document.body.classList.contains("no-scroll")) {
    document.body.classList.remove("no-scroll");
    menuHolder.classList.toggle("mover");
    menuBtn.classList.toggle("xcross");
  } else {
    document.body.classList.add("no-scroll");
    menuHolder.classList.toggle("mover");
    menuBtn.classList.toggle("xcross");
  }
});

consultOpenBtn.forEach((item) => {
  item.addEventListener("click", () => {
    backdrop.classList.remove("invisible");
    consaltFormDesktop.classList.remove("invisible");
    consaltFormMobile.classList.remove("invisible");
    document.body.classList.add("no-scroll");
    upBtn.classList.add("invisible");
  });
});

disclaimer.forEach((item) => {
  item.addEventListener("click", () => {
    footerConfidential.forEach((item) => {
      item.classList.remove("invisible");
    });
    backdrop.classList.remove("invisible");
    document.body.classList.add("no-scroll");
    upBtn.classList.add("invisible");
  });
});

footerCallbackCloseBtn.addEventListener("click", () => {
  backdrop.classList.add("invisible");
  callback.classList.add("invisible");
  document.body.classList.remove("no-scroll");
});

closeBtn.forEach((item) => {
  item.addEventListener("click", () => {
    backdrop.classList.add("invisible");
    footerConfidential.forEach((item) => {
      item.classList.add("invisible");
    });
    if (
      document
        .querySelector(".main-header_container")
        .classList.contains("mover")
    ) {
      return;
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
});

consaltCloseBtn.forEach((item) => {
  item.addEventListener("click", () => {
    consaltFormDesktop.classList.add("invisible");
    consaltFormMobile.classList.add("invisible");
    document.body.classList.remove("no-scroll");
  });
});

sucsessCloseBtn.addEventListener("click", () => {
  backdrop.classList.add("invisible");
  document.body.classList.remove("no-scroll");
  sucsess.classList.add("invisible");
});

sendCloseBtn.forEach((item) => {
  item.addEventListener("click", () => {
    sendFormMobile.classList.add("invisible");
    sendFormDesktop.classList.add("invisible");
    document.body.classList.remove("no-scroll");
  });
});

callbackCloseBtn.forEach((item) => {
  item.addEventListener("click", () => {
    callbackWrapper.classList.add("invisible");
    callback.classList.add("invisible");
    document.body.classList.remove("no-scroll");
  });
});

tableCloseBtn.addEventListener("click", () => {
  table.classList.add("invisible");
  document.body.classList.remove("no-scroll");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    backdrop.classList.add("invisible");
    consaltFormDesktop.classList.add("invisible");
    consaltFormMobile.classList.add("invisible");
    table.classList.add("invisible");
    sendFormMobile.classList.add("invisible");
    sendFormDesktop.classList.add("invisible");
    callback.classList.add("invisible");
    sucsess.classList.add("invisible");
    document.body.classList.remove("no-scroll");
    footerConfidential.forEach((item) => {
      item.classList.add("invisible");
    });
  }
});

tableBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  table.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

mobileAnalisysBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  table.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

sendDeskBtn.addEventListener("click", () => {
  upBtn.classList.add("invisible");
  backdrop.classList.remove("invisible");
  sendFormDesktop.classList.remove("invisible");
  document.body.classList.add("no-scroll");
});

sendMobBtn.addEventListener("click", () => {
  upBtn.classList.add("invisible");
  backdrop.classList.remove("invisible");
  sendFormMobile.classList.remove("invisible");
  document.body.classList.add("no-scroll");
});

mobileFooterBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  callback.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

footerCallbackBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  callback.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

footerCallbackMobileBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  callbackWrapper.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

//___________________SWIPER DESKTOP____________________
const desktop = new Swiper(".desktop", {
  // Optional parameters
  direction: "horizontal",
  roundLengths: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
    rotate: 0,
    depth: 40,
    scale: 0.9,
  },
  initialSlide: 1,
  navigation: {
    nextEl: ".next-swiper",
    prevEl: ".previous-swiper",
  },
});

//___________________SWIPER MOBILE
const mobile = new Swiper(".mobile", {
  // Optional parameters
  direction: "horizontal",
  roundLengths: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
    rotate: 0,
    depth: 0,
    scale: 0.9,
  },
  initialSlide: 1,
  navigation: {
    nextEl: ".next-swiper",
    prevEl: ".previous-swiper",
  },
});
