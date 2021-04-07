window.addEventListener('load', () =>{
    let long;
    let latt;
    let degreeF;
    let degreeC;
    let temperatureDegree = document.querySelector('.temperatureDegree');
    let temperatureDescription = document.querySelector('.temperatureDescription');
    let locationTimezone = document.querySelector('.locationTimezone');
    let temperature = document.getElementById('weatherContainer');
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            latt = position.coords.latitude;
            const APIkey = 'c394e2c7dc6ade5ec268a063a297d35d';
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latt}&lon=${long}&appid=${APIkey}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                    .then(data => {
                        //console.log(data);
                        const TemperatureK = data.current.temp;
                        degreeC = `${Math.floor(TemperatureK - 273.15)} C`;
                        degreeF = `${Math.floor((TemperatureK - 273.15) * 9/5 + 32)} F`;
                        const description = data.current.weather[0].description;
                        const timeZone = data.timezone;
                        let weatherIcon = document.getElementById('weatherIcon');
                        temperatureDegree.textContent = degreeF;
                        temperatureDescription.textContent = description;
                        locationTimezone.textContent = timeZone;
                        const icon = data.current.weather[0].icon;
                        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
                        
                        temperature.addEventListener('click', () =>{
                            if (temperatureDegree.innerHTML === degreeF){
                                temperatureDegree = degreeC;
                            }else{
                                temperatureDegree = degreeF;
                            }

                        });
                        


                    })
            

        })

    }else{
        h1.textContent ="location not enabled";
    };


});