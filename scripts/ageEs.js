// ----- Age calculation

const calcAge = function () {
  let date = new Date();
  let curYear = date.getFullYear();
  let curMonth = date.getMonth();
  let curAge = curYear - 1979;
  if (curMonth >= 3) {
    document.getElementById(
      "ageUa"
    ).innerText = `Astrólogo-consultor, ${curAge} años, casado, 3 hijos`;
  } else {
    document.getElementById("ageUa").innerText = `Астролог-консультант, ${
      curAge - 1
    } роки, у шлюбі, 3 дітей`;
  }
};

calcAge();
