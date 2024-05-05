let btn = document.querySelector("#btnone");
let toggle = document.querySelector("#toggleBtn");
let b = document.querySelector("body");
let currentBackground = "black";

// btn.addEventListener("click", (e) => {
//   console.log("clicked me the first button");
//   console.log(e);
//   console.log(e.target);
//   console.log(e.type);
// });

// document.querySelector("div").addEventListener("mouseover", () => {
//   console.log("mouse is overing on my area lol");
// });

toggle.addEventListener("click", () => {
  if (currentBackground === "black") {
    currentBackground = "white";
    b.classList.remove("white");
    b.classList.add("black");
  } else {
    currentBackground = "black";
    b.classList.remove("black");
    b.classList.add("white");
  }
  console.log(currentBackground);
});
