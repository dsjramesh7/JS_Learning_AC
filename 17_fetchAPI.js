const URL = "https://catfact.ninja/fact";

// let promise = fetch(URL);
// console.log(promise);

const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
};
