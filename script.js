androidBtn.addEventListener("click", androidPage);

function androidPage() {
  img.src = "images/Android-Logo.jpg";

  exploreBtn.innerHTML = "Android Home";
  exploreBtn.style.backgroundColor = "#a4c93b";
  exploreBtn.href = "https://www.android.com/";

  html.style.backgroundColor = "#a4c93b";
  html.style.fontFamily = `'Roboto', sans-serif`;

  androidBtn.classList.add("active");
  appleBtn.classList.remove("active");
}

let androidBtn = document.getElementById("android");
let appleBtn = document.getElementById("apple");
let img = document.getElementById("imgapp");
let exploreBtn = document.getElementById("explore-btn");
let html = document.getElementById("the-html");

appleBtn.addEventListener("click", applePage);

function applePage() {
  img.src = "images/Apple-Logo.jpg";

  exploreBtn.innerHTML = "Apple Home";
  exploreBtn.style.backgroundColor = "#b6bcca";
  exploreBtn.href = "https://www.apple.com/";

  html.style.backgroundColor = "#b6bcca";
  html.style.fontFamily = `'Brygada 1918', serif`;

  appleBtn.classList.add("active");
  androidBtn.classList.remove("active");
}
