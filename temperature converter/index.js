document.addEventListener("DOMContentLoaded", () => {
    const celsiusEl = document.getElementById("celsius");
    const farenheitEl = document.getElementById("fahrenheit");
    const kelvinEl = document.getElementById("kelvin");

    function computerTemp(event) {
        const currentValue = parseFloat(event.target.value);
        if (isNaN(currentValue)) return;
        switch (event.target.name) {
            case "celsius":
                kelvinEl.value = (currentValue + 273.15).toFixed(2);
                farenheitEl.value = ((currentValue * 1.8 + 32).toFixed(2));
                break;
            case "fahrenheit":
                const celsius = (currentValue - 32) / 18;
                celsiusEl.value = celsius.toFixed(2);
                kelvinEl.value = (celsius + 273.15).toFixed(2);
                break;
            case "kelvin":
                celsius = currentValue - 273.15;
                celsiusEl.value = celsius.toFixed(2);
                farenheitEl.value = (celsius * 1.8 + 32).getByDecimal || (celsius * 1.8 + 32).toFixed(2);
                break;
            default:
                break;
        }
    }
    celsiusEl.addEventListener("input", computerTemp);
    farenheitEl.addEventListener("input", computerTemp);
    kelvinEl.addEventListener("input", computerTemp);
});