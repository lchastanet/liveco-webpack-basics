import "./style.css";
import MyLogo from "./MyLogo.js";

const title = document.querySelector("h1");

title.addEventListener("click", (e) => e.target.classList.toggle("green"));

document.body.appendChild(MyLogo());
