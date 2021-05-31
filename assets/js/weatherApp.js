const input = document.querySelector('.search-city');
const searchBtn = document.querySelector('.fas');
const city = document.querySelector('.city');

const form = document.querySelector('.form');

/////////////////////////////////



class App {
    #parentElement = document.querySelector('.app');
    #KEY = `cb7fa1df4f862242c79d99d4e50959e6`;

    constructor() {
        searchBtn.addEventListener('click', this._getWeather.bind(this));
        form.addEventListener('submit', this._getWeather.bind(this));
    }

    async _getWeather(e) {
        try {
            e.preventDefault();
            this._renderSpinner();
            const cityName = input.value;
            this._clearInput();
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.#KEY}`
            const data = await this._getJSON(url);
            this._renderData(data);
        }
        catch (err) {
            console.error(err)
            this._renderError(`${err}`);
        }
    }

    _renderSpinner() {
        this.#parentElement.innerHTML = "";
        this.#parentElement.insertAdjacentHTML('afterbegin', `
               <div class="spinner">
                <img src="../../assets/Images/weatherApp/loading.svg" alt="">
                
              </div> 
    `)
    }
    _clearInput() {
        input.value = "";
    }

    async _getJSON(url) {
        try {
            const response = await fetch(url);
            console.log(response)

            if (!response.ok) throw new Error(`${response.statusText} (${response.status})`)

            const data = await response.json();

            return data;
        }
        catch (err) {
            throw err;
        }
    }

    _renderData(data) {
        const markup = this._generateMarkup(data);
        this.#parentElement.innerHTML = "";

        this.#parentElement.insertAdjacentHTML('afterbegin', markup)
        this.#parentElement.style.visibility = 'visible';
        this.#parentElement.style.opacity = '1';
    }

    _renderError(err) {
        const markup = `
    <div class="placeholder-weather">
    <img src="../../assets/Images/weatherApp/error.svg" alt="">
    <h2>${err}</h2>
 
  </div>`
        console.log(markup)
        this.#parentElement.innerHTML = "";
        this.#parentElement.insertAdjacentHTML('afterbegin', markup)
        this.#parentElement.style.visibility = 'visible';
        this.#parentElement.style.opacity = '1';

    }

    _generateMarkup(data) {
        console.log(data.weather[0].main)
        return `
        <div class="row-1">
        <div class="weather-icon">
          <img src="../../assets/Images/weatherApp/${data.weather[0].main}.svg" alt="" class="weather-img">
        </div>
        <h2 class="temp"> <span class="temp-data">${(data.main.temp - 273.15).toFixed(0)}</span> °C</h2>
        <h3 class="weather-desc">${data.weather[0].main}</h3>
        <h1 class="city">${data.name}</h1>
      </div>
      <div class="row-2">
        <div class="max-temp extra-data">
          
            
            <h4 class="max-temp">Max Temp : </h4>
            <p class="max-temp-text">${(data.main.temp_max - 273.15).toFixed(0)} °C</p>
        </div>
        <div class="min-temp extra-data">
    
          <h4 class="min-temp">Min Temp : </h4>
          <p class="min-temp-text">${(data.main.temp_min - 273.15).toFixed(0)} °C</p>
    
        </div>
        <div class="pressure extra-data">
    
          <h4 class="pressure">Pressure : </h4>
          <p class="pressure-text">${data.main.pressure} hPA</p>
    <!--//hPA -->
        </div>
        <div class="humidity extra-data">
    
          <h4 class="humidity-temp">Humidity : </h4>
          <p class="humidity-text">${data.main.humidity} %</p>
          <!-- % -->
        </div>
        <div class="wind extra-data">
    
          <h4 class="wind-temp">Wind Speed : </h4>
          <p class="wind-text">${data.wind.speed} m/s</p>
    <!--m/s -->
        </div>
      </div>
        `
    }
}

const app = new App();