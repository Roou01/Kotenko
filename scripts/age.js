// ----- Age calculation

const calcAge = function () {
  let date = new Date();
  let curYear = date.getFullYear();
  let curMonth = date.getMonth();
  let curAge = curYear - 1979;
  if (curMonth >= 3) {
    document.getElementById(
      "age"
    ).innerText = `Астролог-консультант, ${curAge} года, в браке, 3 детей`;
  } else {
    document.getElementById("age").innerText = `Астролог-консультант, ${
      curAge - 1
    } года, в браке, 3 детей`;
  }
};

calcAge();
