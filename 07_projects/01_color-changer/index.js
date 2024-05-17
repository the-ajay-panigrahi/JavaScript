const buttons = document.querySelectorAll(".color-box");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (eventObject) => {
    switch (eventObject.target.id) {
      case "violet":
        body.style.backgroundColor = "#9400d3";
        document.querySelector("h1").style.color = "#ffffff";
        document.querySelector("p").style.color = "#ffffff";
        break;

      case "indigo":
        body.style.backgroundColor = "#4B0082";
        document.querySelector("h1").style.color = "#ffffff";
        document.querySelector("p").style.color = "#ffffff";

        break;

      case "blue":
        body.style.backgroundColor = "#0000FF";
        document.querySelector("h1").style.color = "#ffffff";
        document.querySelector("p").style.color = "#ffffff";
        break;

      case "green":
        body.style.backgroundColor = "#00FF00";
        document.querySelector("h1").style.color = "#000000";
        document.querySelector("p").style.color = "#000000";
        break;

      case "yellow":
        body.style.backgroundColor = "#FFFF00";
        document.querySelector("h1").style.color = "#000000";
        document.querySelector("p").style.color = "#000000";
        break;

      case "orange":
        body.style.backgroundColor = "#FF7F00";
        document.querySelector("h1").style.color = "#ffffff";
        document.querySelector("p").style.color = "#ffffff";
        break;

      case "red":
        body.style.backgroundColor = "#FF0000";
        document.querySelector("h1").style.color = "#ffffff";
        document.querySelector("p").style.color = "#ffffff";
        break;

      default:
        break;
    }
  });
});
