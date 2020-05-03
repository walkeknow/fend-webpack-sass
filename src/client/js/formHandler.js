// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=66c2354315610ef35e7c8e5f5fe28b4d";
let webApi = "http://api.openweathermap.org/data/2.5/weather";
const tempUnit = "&units=metric";

function handleSubmit(event) {
    event.preventDefault()

    // create url
    const url = `${webApi}?zip=30332${tempUnit}${apiKey}`;

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    getData(url)
    .then(function(temp) {
        document.getElementById('results').innerHTML = `Current temperature at Georgia Tech: ${temp}°C`
    })
}

/* Function to GET Web API Data*/
const getData = async (url = '') => {
    const response = await fetch(url);
    try {
        const allData = await response.json();
        const temp = allData.main.temp;
        return temp;
    } catch (error) {
        console.log("error: ", error);
        throw error;
    }
}

export { handleSubmit }