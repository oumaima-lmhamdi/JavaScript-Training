const key = 'KEAw5bUde5AK2PEHcSV4aBTSYIXv9G2q';

// get city weather informations

const getWeather = async (citykey)=>{
    const ressourceUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${citykey}?apikey=${key}`;

    const response = await fetch(ressourceUrl + query);
    const data = await response.json();

    return data[0];
};

// get city key
const getCity = async(city)=>{
    const ressourceUrl ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(ressourceUrl + query);
    const data = await response.json();

    return data[0];
};