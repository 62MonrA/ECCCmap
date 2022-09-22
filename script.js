  //Scale Line
var scaleLineControl = new ol.control.ScaleLine();

var map = new ol.Map({
  controls: ol.control.defaults({
    attributionOptions: false,
    
  }).extend([
    scaleLineControl,
    new ol.control.ScaleLine()
  ]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});


//layer


//search bar 
var geocoder = new Geocoder('nominatim', {
  provider: 'osm',
  key: '',
  lang: ' fr-FR',
  placeholder: 'Search for ...',
  targetType: 'text-input',
  limit: 5,
  keepOpen: true
});
map.addControl(geocoder);

geocoder.on('addresschosen', function(evt){
  var feature = evt.feature,
      coord = evt.coordinate,
      address = evt.address;
  
});

geocoder.on('addresschosen', function(evt) {
  // it's up to you
  console.info(evt);
});

//Side bar

const btnMenu  = document.querySelector(".side-btn");
const nav  = document.querySelector(".slide");
const allitemNav = document.querySelectorAll(".nav-menu-item");
const line = document.querySelector(".cont-line");
const main = document.querySelector("body");
const cross = document.querySelector(".uniq-line");
const searchBox = document.querySelector(".gcd-txt-control")

 
  btnMenu.addEventListener("click",function(){
    nav.style.width = "250px";
    main.style.marginLeft = "250px";
    line.classList.toggle('active'),
    nav.classList.toggle('menu-visible'),
    nav.classList.toggle('active-slide'),
    searchBox.style.marginLeft = "10px"
  })

  cross.addEventListener("click",function(){
    main.style.marginLeft = "0"
  })

if (window.matchMedia('(max-width:100%)')) {
    allitemNav.forEach(item =>{
        item.addEventListener('click',() =>{
            nav.classList.toggle("menu-visible"),
            line.classList.toggle('active')
        })
    })
}





const blocWeather = document.querySelector(".bloc-weather");
const weather = document.querySelector(".weather")
const zoom = document.querySelector(".ol-zoom")

blocWeather.addEventListener("click",function(){
  //document.querySelector("body").classList.toggle("active").style.width = "250px";
  document.querySelector(".r-sidebar").style.width = "250px";
  document.querySelector("body").style.marginRight = "250px";
  weather.style.marginRight = "250px";
  zoom.style.marginRight = "250px";
  searchBox.style.marginLeft = "100px";

})

//popup container

/*const popupContainerElement = document.querySelector("popup-coordinates");
const popup = new ol.Overlay({
  element : popupContainerElement
})

map.addOverlay(popup);

map.on('click', function(e){
  const clickedCoordinate = e.corrdinate;
  popup.setPosition(undefined);
  popup.setPosition(clickedCoordinate);
  popupContainerElement.innerHTML = clickedCoordinate;
})*/


// symbol layer 



//pop up

/*function renderMetar(metar) {
  console.log(metar)
  var resultsMetar = document.querySelector("#metar-results");
  
  //create h2 for the aiport abb
  function fetchMetar(query){
    var url = "https://tgftp.nws.noaa.gov/data/observations/metar/stations/q="+ query + ".TXT"
  
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
  
  }
  
  fetchMetar("CYUL")*/
  
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

fetchWeather(addresschosen .name)

const box = document.querySelector(".gcd-txt-control"),
inputPart = box.querySelector('gcd-input-query.gcd-txt-input'),
inputField = inputPart.querySelector("input");

inputField.addEventListener("keyup", e =>{
  //if user pressed enter btn and input valur is not empty
  if(e.key =="Enter" && inputField.value != ""){
    console.log("hello")
    /*requestApi(inputField.value);*/
  }
});

function resquestApi(city){
  let api = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0ef0574d61ec9490a398a88ea595e20a"
  fetch(api).then(response => response.json()).then(result => weatherDetails(result));

}

function weatherDetails(info){
  console.log(info);
}

/*var x, xmlhttp, xmlDOC
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","https://tgftp.nws.noaa.gov/data/observations/metar/stations/",false);
xmlhttp.send()*/

//mapbox layer
/*import { apply } from 'ol-mapbox-style';

apply('map', 'https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token='');*/

