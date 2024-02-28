

const key = "9984bf925c583378f230c437d4358f13"

 const putDataInScreen = (data) => {

    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-wheather").innerHTML = data.weather[0].description
    document.querySelector(".umid").innerHTML = "Umidade " + data.main.humidity + "%"
    document.querySelector(".img-wheather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`


 }


const searchCity = async (city) => {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    putDataInScreen(data)
}

const buttonClick = () => {
    const city = document.querySelector(".input-city").value
    
    searchCity(city)
}