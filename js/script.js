console.log(`New Beersheba Public School`);

// Theme Toggle

let theme = document.querySelector("#theme");

theme.onclick = () => {
  theme.classList.toggle("fa-sun");
  if (theme.classList.contains("fa-sun")) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

// Facilities Table

let table = document.getElementById("table");

for (let i = 0; i < facilities.length; i++) {
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  // let cell3 = row.insertCell(2);

  cell1.innerHTML = facilities[i].name;
  cell2.innerHTML = facilities[i].about;
  // cell3.innerHTML = facilities[i].capacity;
}
