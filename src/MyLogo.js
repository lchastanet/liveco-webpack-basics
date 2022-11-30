import logo from "./img/logo.png";

export default function MyLogo() {
  const img = document.createElement("img");
  img.src = logo;
  img.alt = "my syper logo";
  return img;
}
