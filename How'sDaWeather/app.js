const search = document.querySelector('form');
const cityDetails = document.querySelector('.cityDetails');
const card = document.querySelector('.card');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');



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

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    // update the weather's condition icon
    const iconSrc = `images/icons/${cityWeather.WeatherIcon}.svg`;
    console.log(iconSrc)
    icon.setAttribute('src', iconSrc);
    // update the night/day image
    const timeSrc = cityWeather.IsDayTime ? 'images/day.svg' : 'images/night.svg';
    console.log(timeSrc);
    time.setAttribute('src', timeSrc);
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