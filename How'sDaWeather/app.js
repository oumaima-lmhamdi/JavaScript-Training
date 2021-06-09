const search = document.querySelector('form');
const cityDetails = document.querySelector('.cityDetails')



const searchCity = async(city)=>{
    const cityInfo = await getCity(city);
    const cityWeather = await getWeather(cityInfo.Key);

    return {cityInfo, cityWeather};
};

const updateUI = data=>{
    const cityInfo = data.cityInfo;
    const cityWeather = data.cityWeather;
    cityDetails.innerHTML=
    `
    <h5 class="my-2">${cityInfo.EnglishName}</h5>
    <div class="my-2">${cityWeather.WeatherText}</div>
    <div class="display-2 my-1">
        <span>${cityWeather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;
};

search.addEventListener('submit', e=>{
    // prevent default event
    e.preventDefault();
    const city = search.city.value.trim();
    // get city informations and weather
    searchCity(city)
    .then(data=> updateUI(data))
    .catch(err=> console.log(err));
    // clear form
    search.reset();
});