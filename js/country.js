const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayCountry(data));
};
loadCountry();
const displayCountry = (data) => {
  const allCountry = document.getElementById("countries");
  data.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3> country-Name: ${country.name.common} </h3>
   <p> Capital: ${country.capital} </p>
   <button onClick="loadBtn('${country.name.common}')">Detils</button>`;
    allCountry.appendChild(div);
  });
};
const loadBtn = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => loadDisplayData(data[0]));
};
const loadDisplayData = (data) => {
  console.log(data);
  const countryDetails = document.getElementById("cuntryDetils");
  countryDetails.innerHTML = `
  <h5>${data.name.common}</h5>
  <p> popolatoin: ${data.population}</p> 
 <img width="200" src="${data.flags.png}"/>
  `;
};
// https://api.countrylayer.com/v2/all

// fetch('https://restcountries.eu/rest/v2/all')
