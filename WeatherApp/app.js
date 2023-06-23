const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b8866a525fmsh3137786d3aba55bp196f3ajsn817ee39609b8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
let city = 'delhi'; 
    document.getElementById("cityy").innerHTML=(city.toUpperCase())
    document.getElementById("cityy").style.opacity='1'
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            cloud.innerHTML = ' ' + response.cloud_pct
            feelslike.innerHTML = ' ' + response.feels_like + '&#8451'
            humidity.innerHTML = ' ' + response.humidity + '%'
            maxTemp.innerHTML = ' ' + response.max_temp + '&#8451'
            mintemp.innerHTML = ' ' + response.min_temp + '&#8451'
            // sunrise.innerHTML = response.sunrise
            // sunset.innerHTML = response.sunset
            temp.innerHTML = ' ' + response.temp + '&#8451'
            windDegrees.innerHTML = ' ' + response.wind_degrees
            windSpeed.innerHTML = ' ' + response.wind_speed + ' km/h'
            if(cloud.innerHTML==' undefined'){
                hide_show();
                document.getElementById("ip").value = 'delhi';
                search();
            }
        })
        .catch(err => console.error(err));
const search = ()=>{
    let city = document.getElementById("ip").value; 
    document.getElementById("cityy").innerHTML=(city.toUpperCase())
    document.getElementById("cityy").style.opacity='1'
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            cloud.innerHTML = ' ' + response.cloud_pct
            feelslike.innerHTML = ' ' + response.feels_like + '&#8451'
            humidity.innerHTML = ' ' + response.humidity + '%'
            maxTemp.innerHTML = ' ' + response.max_temp + '&#8451'
            mintemp.innerHTML = ' ' + response.min_temp + '&#8451'
            // sunrise.innerHTML = response.sunrise
            // sunset.innerHTML = response.sunset
            temp.innerHTML = ' ' + response.temp + '&#8451'
            windDegrees.innerHTML = ' ' + response.wind_degrees
            windSpeed.innerHTML = ' ' + response.wind_speed + ' km/h'
            if(cloud.innerHTML==' undefined'){
                hide_show();
                document.getElementById("ip").value = 'delhi';
                search();
            }
        })
        .catch(err => console.error(err));

    document.getElementById("ip").value=''
}
var input = document.getElementById("ip");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});







// live alert

const hide_show = () => {
    document.getElementById('alert').classList.remove('hide');
    document.getElementById('alert').classList.add('show');
    document.getElementById('alert').classList.add('op');
    setTimeout(() => {
        document.getElementById('alert').classList.add('hide');
        document.getElementById('alert').classList.remove('show');
        setTimeout(() => {
            document.getElementById('alert').classList.remove('op');
        }, 400)
    }, 10000)
}
const show_hide = () => {
    document.getElementById('alert').classList.add('hide');
    document.getElementById('alert').classList.remove('show');
    setTimeout(() => {
        document.getElementById('alert').classList.remove('op');
    }, 400)

}