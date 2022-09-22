function renderWeather(weather){
    console.log(weather);
    var resultsContainer = document.querySelector("#weather-results");
    //create h2 for name
    var city = document.createElement("h2");
    city.textContent = weather.name;
    resultsContainer.append(city);
  
    //create p for humidity,wind,description, temp
    var temp = document.createElement("p");
    temp.textContent = "Temp:" + weather.main.temp + "F";
    resultsContainer.append(temp);
  
    var humidity = document.createElement("p");
    humidity.textContent = "Humidity:" + weather.main.humidity + "%";
    resultsContainer.append(humidity);
  
    var wind = document.createElement("p");
    wind.textContent = "Wind:" + weather.wind.speed + "mph" + weather.wind.deg + "°" ;
    resultsContainer.append(wind);
  
    var weatherDetails = weather.weather[0]
    if (weather.weather[0] && weatherDetails.description)
    var description = document.createElement("p");
    description.textContent = weatherDetails.description ;
    resultsContainer.append(description);
  
  }
  
  function fetchWeather(query){
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&units=metric&appid=0ef0574d61ec9490a398a88ea595e20a"
  
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
  
  }
  
  fetchWeather("Montréal")
  
  /*const box = document.querySelector(".gcd-txt-control"),
  inputPart = box.querySelector('gcd-input-query.gcd-txt-input'),
  inputField = inputPart.querySelector("input");
  
  inputField.addEventListener("keyup", e =>{
    //if user pressed enter btn and input valur is not empty
    if(e.key =="Enter" && inputField.value != ""){
      console.log("hello")
      /*requestApi(inputField.value);
    }
  })
  
  function resquestApi(city){
    let api = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0ef0574d61ec9490a398a88ea595e20a"
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
  
  }
  
  function weatherDetails(info){
    console.log(info);
  }*/