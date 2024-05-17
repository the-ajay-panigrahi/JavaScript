let clockDiv = document.getElementById("clock");

setInterval(() => {
  let currentTime = new Date();
  clockDiv.innerHTML = currentTime.toLocaleTimeString();
}, 1000);
