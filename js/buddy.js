const loadBuddy = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => dsplayBuddy(data));
};
loadBuddy();

const dsplayBuddy = (data) => {
  const buddis = data.results;
  const buddisDiv = document.getElementById("buddy");
  for (const buddy of buddis) {
    const p = document.createElement("p");
    p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
     Email: ${buddy.email}`;
    buddisDiv.appendChild(p);
    console.log(buddy);
  }
};
