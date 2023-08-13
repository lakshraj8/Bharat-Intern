//scripts

const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

//window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTOcelsius();

})

function convertTOcelsius() {
    let inputValue = degree.value;

    if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputValue -32) * (5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;
    }

    else if(tempType.value === "kelvin"){
        const kelvinTocelsius = inputValue - 273.15;
        celsiusField.innerHTML = `${kelvinTocelsius.toFixed(3)} &deg; c`;
    }
}