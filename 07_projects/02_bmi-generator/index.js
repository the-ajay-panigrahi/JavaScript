const form = document.querySelector("form");

form.addEventListener("submit", (eventObject) => {
  eventObject.preventDefault();
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");

  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  const result = document.getElementById("result");
  result.style.color = "red";
  result.style.backgroundColor = "yellow";
  result.style.fontSize = "30px";
  result.style.paddingInline = "20px";
  result.style.paddingBlock = "10px";
  result.style.borderRadius = "30px";
  result.style.textAlign = "center";

  // Validation
  if (height < 0 || isNaN(height)) {
    result.innerHTML = `<span>Enter a valid height and not ${height}</span>`;
  } else if (weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>Enter a valid weight and not ${weight}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}</span> </br> <span>Under Weight</span> `;
      document.getElementById("firstPara").style.color = "black";
      document.getElementById("firstPara").style.fontSize = "30px";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>${bmi}</span> </br> <span>Normal Range</span> `;
      document.getElementById("secondPara").style.color = "black";
      document.getElementById("secondPara").style.fontSize = "30px";
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>${bmi}</span> </br> <span>Overweight</span> `;
      document.getElementById("thirdPara").style.color = "black";
      document.getElementById("thirdPara").style.fontSize = "30px";
    }
  }
});
