const city = document.getElementById('city').value;
const countryData = document.querySelector('.country-data')
const dateData = document.querySelector('.date-data')
const degreesData = document.querySelector('.degrees-data')
const conditionData = document.querySelector('.conditions-data')
const conditionImage = document.getElementById('conditions-image')
const windDir = document.querySelector('.winddir-data')
const ultrV = document.querySelector('.uv-data')
const humidity = document.querySelector('.humidity-data')
const pressure = document.querySelector('.pressure-data')
let alertShown = false;

function showAlert() {
    if (!alertShown) {
        
    
  alert('Scroll down the page for more additional information on the weather');
  alertShown = true;
    }
}

setTimeout(showAlert, 10000);


async function getWeather(city) {
  const apiKey = 'bd56e4523b4541c7a8001143222812';
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);
  const data = await response.json();
  console.log(data);
  countryData.innerHTML = data.location['country']
  degreesData.innerHTML = data.current['temp_c'] + '°C'
  dateData.innerHTML = data.location['localtime']
  conditionData.innerHTML = data.current.condition['text']
  conditionImage.setAttribute('src', data.current.condition['icon'])
  windDir.innerHTML = data.current['wind_dir']
  ultrV.innerHTML = data.current['uv']
  humidity.innerHTML = data.current['humidity']
  pressure.innerHTML = data.current['pressure_mb']
  
  showAlert();
}
//getWeather(city);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});
