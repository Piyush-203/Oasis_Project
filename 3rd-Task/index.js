
let celcius = document.getElementById("celcius");
let Kelvin = document.getElementById("Kelvin");


function celToKel(){
    let output = (parseFloat(celcius.value) + 273.15) ;
    Kelvin.value = parseFloat(output.toFixed(2));
}

function KelToCel(){
    let out = (parseFloat(fahrenheit.value) - 273.15) ;
    celcius.value = parseFloat(out.toFixed(2));
}