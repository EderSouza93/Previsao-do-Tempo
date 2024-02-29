

const key = "9984bf925c583378f230c437d4358f13"


const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
}

const success = (position) => {

    var coordinates = position.coords;
    var lat = coordinates.latitude;
    var lon = coordinates.longitude;
    fetchWeather(lat, lon); 

}

const error = (error) => {
    console.log(error)
}

const fetchWeather = async (lat, lon) => {
    const apiKey = '9984bf925c583378f230c437d4358f13';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`);
    const data = await response.json();
    updateDOM(data);
}

const updateDOM = (data) => {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".min").innerHTML = "Mínima de " + Math.floor(data.main.temp_min) + "°C";
    document.querySelector(".max").innerHTML = "Máxima de " + Math.floor(data.main.temp_max) + "°C";
    document.querySelector(".text-wheather").innerHTML = data.weather[0].description;
    document.querySelector(".sens").innerHTML = `Sensação térmica: ${Math.floor(data.main.feels_like)}°C`;
    document.querySelector(".umid").innerHTML = "Umidade: " + data.main.humidity + "%";
    document.querySelector(".img-wheather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

navigator.geolocation.getCurrentPosition(success, error, options)


//

const putDataInScreen = (data) => {

    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".min").innerHTML = "Mínima de " + Math.floor(data.main.temp_min) + "°C"
    document.querySelector(".max").innerHTML = "Máxima de " + Math.floor(data.main.temp_max) + "°C"
    document.querySelector(".text-wheather").innerHTML = data.weather[0].description
    document.querySelector(".sens").innerHTML = `Sensação térmica: ${Math.floor(data.main.feels_like)}°C`
    document.querySelector(".umid").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-wheather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

const searchCity = async (city) => {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    putDataInScreen(data)
}

const buttonClick = () => {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}