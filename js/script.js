console.log(`New Beersheba Public School`);

let theme = document.querySelector("#theme");

theme.onclick = () => {
  theme.classList.toggle("fa-sun");
  if (theme.classList.contains("fa-sun")) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};
