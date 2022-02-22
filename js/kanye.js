const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => quotes(data));
};
const quotes = (data) => {
  const quotesElements = document.getElementById("quotes");
  quotesElements.innerText = data.quote;
  //   console.log(data);
};
